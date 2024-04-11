import { escapeXhtml } from ".";

export const domToSvg = async (node: HTMLElement, width: number, height: number) =>{
  return await Promise.resolve(node)
      .then(function (node) {
          node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
          return new XMLSerializer().serializeToString(node);
      })
      .then(escapeXhtml)
      .then(function (xhtml) {
          return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
      })
      .then(function (foreignObject) {
          return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
              foreignObject + '</svg>';
      })
      .then(function (svg) {
          return 'data:image/svg+xml;charset=utf-8,' + svg;
      });
}
