import { asArray, dataAsUrl, getAndEncode, isDataUrl, mimeType } from ".";
import { Inliner } from "./inliner";

export class Images {

  constructor() {

  }

  public async inlineAll(node: HTMLElement | ChildNode): Promise<any> {
    if (!(node instanceof Element)) return Promise.resolve(node);

    return await this.inlineBackground(node as HTMLElement)
        .then(() => {
            if (node instanceof HTMLImageElement)
                return this.newImage(node) || undefined;
            return Promise.all(
              asArray<NodeListOf<ChildNode>, ChildNode>(node.childNodes)
                .map((child: ChildNode) => this.inlineAll(child))
                );
        });
  }

  private async newImage(element: HTMLImageElement): Promise<any> {
    if (isDataUrl(element.src)) return Promise.resolve();

    return await Promise.resolve(element.src)
        .then(getAndEncode)
        .then((data) => dataAsUrl(data, mimeType(element.src)))
        .then((dataUrl) => new Promise((resolve, reject) => {
                element.onload = resolve;
                element.onerror = () => {
                  reject(`图片加载失败 newImage：${dataUrl}`)
                };
                element.src = dataUrl;
            }));
  }

  private async inlineBackground(node: HTMLElement): Promise<HTMLElement> {
    const background = node.style.getPropertyValue('background');

    if (!background) return Promise.resolve(node);

    return await Inliner.inlineAll(background)
        .then((inlined) => {
            node.style.setProperty(
                'background',
                inlined,
                node.style.getPropertyPriority('background')
            );
          return node
        })
  }
}

export const inlineImages = async (node: HTMLElement | undefined) => {
  if (!node) return

  const images = new Images()
  return await images.inlineAll(node)
      .then(() => node);
}
