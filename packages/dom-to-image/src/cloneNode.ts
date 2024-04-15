import { asArray, makeImage, uid } from "./utils";

export const cloneNode = async (node: HTMLElement, filter: Function, root?: boolean) => {
  if (!root && filter && !filter(node)) return;


  const cloneChildren = async (original: HTMLElement, clone: HTMLElement, filter: Function) => {
    const children = original.childNodes;
    if (children.length === 0) return Promise.resolve(clone);

    const cloneChildrenInOrder = async (parent: HTMLElement, children: ChildNode[], filter: Function) => {
      for await (const child of children) {
        const childClone = await cloneNode(child as HTMLElement, filter);
        if (childClone) parent.appendChild(childClone);
      }
    }

    await cloneChildrenInOrder(clone, asArray<NodeListOf<ChildNode>, ChildNode>(children), filter)
    return clone
  }

  const makeNodeCopy = (node: HTMLElement) => {
    if (node instanceof HTMLCanvasElement) return makeImage(node.toDataURL());
    return node.cloneNode(false) as HTMLElement;
  }

  const processClone = async (original: HTMLElement, clone: HTMLElement) => {
    if (!(clone instanceof Element)) return clone;

    return await Promise.resolve()
        .then(cloneStyle)
        .then(clonePseudoElements)
        .then(copyUserInput)
        .then(fixSvg)
        .then(() => clone);

    function cloneStyle() {
        const copyStyle = (source: CSSStyleDeclaration, target: CSSStyleDeclaration) => {
            const copyProperties = () => {
                asArray<CSSStyleDeclaration, string>(source).forEach((name) => {
                    target.setProperty(
                        name,
                        source.getPropertyValue(name),
                        source.getPropertyPriority(name)
                    );
                });
            }
            if (source.cssText) target.cssText = source.cssText;
            else copyProperties();
        }
        copyStyle(window.getComputedStyle(original), clone.style);
    }

    function clonePseudoElements() {
        [':before', ':after'].forEach((element) => {
            clonePseudoElement(element);
        });

        function clonePseudoElement(element: string) {
            const style = window.getComputedStyle(original, element);
            const content = style.getPropertyValue('content');

            if (content === '' || content === 'none') return;

            const className = uid();
            clone.className = `${clone.className  } ${  className}`;
            const styleElement = document.createElement('style');
            styleElement.appendChild(formatPseudoElementStyle(className, element, style));
            clone.appendChild(styleElement);

            function formatPseudoElementStyle(className: string, element: string, style: CSSStyleDeclaration) {
                const selector = `.${  className  }:${  element}`;
                const cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                return document.createTextNode(`${selector  }{${  cssText  }}`);

                function formatCssText(style: CSSStyleDeclaration) {
                    const content = style.getPropertyValue('content');
                    return `${style.cssText  } content: ${  content  };`;
                }

                function formatCssProperties(style: CSSStyleDeclaration) {
                    return `${asArray<CSSStyleDeclaration, string>(style)
                        .map(formatProperty)
                        .join('; ')  };`;

                    function formatProperty(name: string) {
                        return `${name  }: ${ 
                            style.getPropertyValue(name) 
                            }${style.getPropertyPriority(name) ? ' !important' : ''}`;
                    }
                }
            }
        }
    }

    function copyUserInput() {
        if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
        if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
    }

    function fixSvg() {
        if (!(clone instanceof SVGElement)) return;
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        if (!(clone instanceof SVGRectElement)) return;
        ['width', 'height'].forEach((attribute) => {
            const value = clone.getAttribute(attribute);
            if (!value) return;

            clone.style.setProperty(attribute, value);
        });
    }
  }

  return await Promise.resolve(node)
      .then(makeNodeCopy)
      .then(async (clone) => {
        if (!clone) return
          return await cloneChildren(node, clone, filter);
      })
      .then(async (clone) => {
        if (!clone) return
          return await processClone(node, clone);
      });
}
