// import { cloneNode } from "./cloneClone";
// import { domToSvg } from "./utils/svg";
// import { embedFonts } from "./utils/font";
// import { inlineImages } from "./utils/image";
// import { delay, makeImage} from "./utils";

// export class DomToImage {
//   private options: any
//   constructor(options: any) {
//     this.options = options || {}
//   }

//   public async toPng(node: HTMLElement) {
//     return await this.draw(node)
//         .then(function (canvas) {
//             return canvas.toDataURL();
//         });
//   }

//   private draw(domNode: HTMLElement) {
//     return this.toSvg(domNode)
//       .then(makeImage)
//       .then(delay(100))
//       .then((image: any) => {
//         let canvas = this.newCanvas(domNode);
//         canvas.getContext('2d')?.drawImage(image, 0, 0);
//         return canvas;
//       });
//   }

//   public async toSvg(node: HTMLElement) {
//     const { filter, bgcolor, width, height, style } = this.options

//     const applyOptions = (clone: HTMLElement | undefined) => {
//       if (!clone) return
//       if (bgcolor) clone.style.backgroundColor = bgcolor;
//       if (width) clone.style.width = width + 'px';
//       if (height) clone.style.height = height + 'px';

//       if (style)
//           Object.keys(style).forEach((property: any) => {
//               clone.style[property] = style[property];
//           });

//       return clone;
//     }
//     return await Promise.resolve(node)
//         .then((node: HTMLElement) => {
//             return cloneNode(node, filter, true);
//         })
//         .then(embedFonts)
//         .then(inlineImages)
//         .then(applyOptions)
//         .then((clone) => {
//           if (!clone) return
//             return domToSvg(clone,
//                 width || width(node),
//                 height || height(node)
//             )
//         })
//   }

//   private newCanvas(domNode: HTMLElement): HTMLCanvasElement {
//     const { width, height, bgcolor } = this.options
//     let canvas = document.createElement('canvas');
//     canvas.width = width || width(domNode);
//     canvas.height = height || height(domNode);

//     if (bgcolor) {
//       const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
//       ctx.fillStyle = bgcolor;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     }
//     return canvas;
//   }
// }

const mimes: Record<string, string> = {
  'ttf': 'application/font-truetype',
  'eot': 'application/vnd.ms-fontobject',
  'png': 'image/png',
  'gif': 'image/gif',
  'tiff': 'image/tiff',
  'svg': 'image/svg+xml'
}

console.log(mimes)
