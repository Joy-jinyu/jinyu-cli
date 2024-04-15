import { cloneNode } from './cloneNode'
import { domToSvg } from './utils/svg'
import { embedFonts } from './utils/font'
import { inlineImages } from './utils/image'
import { delay, makeImage, nodeHeight, nodeWidth } from './utils'

export class DomToImage {
  private options: any

  constructor(options: any = {}) {
    this.options = options || {}
  }

  public async toPng(node: HTMLElement, options: any = {}) {
    this.options = { ...this.options, ...options }

    return await this.draw(node).then((canvas) => canvas.toDataURL())
  }

  private draw(domNode: HTMLElement, options: any = {}) {
    this.options = { ...this.options, ...options }
    return this.toSvg(domNode)
      .then(makeImage)
      .then(delay(100))
      .then((image: any) => {
        const canvas = this.newCanvas(domNode)
        canvas.getContext('2d')?.drawImage(image, 0, 0)
        return canvas
      })
  }

  public async toSvg(node: HTMLElement, options: any = {}) {
    this.options = { ...this.options, ...options }

    const { filter, loadFont, bgcolor, width, height, style } = this.options

    const applyOptions = (clone: HTMLElement | undefined) => {
      if (!clone) return
      if (bgcolor) clone.style.backgroundColor = bgcolor
      if (width) clone.style.width = `${width}px`
      if (height) clone.style.height = `${height}px`

      if (style)
        Object.keys(style).forEach((property: any) => {
          clone.style[property] = style[property]
        })

      return clone
    }
    return await Promise.resolve(node)
      .then((node: HTMLElement) => cloneNode(node, filter, true))
      .then((clone) => {
        if (loadFont) return embedFonts(clone)
        return clone
      })
      .then(inlineImages)
      .then(applyOptions)
      .then((clone) => {
        if (!clone) return
        return domToSvg(clone, width || nodeWidth(node), height || nodeHeight(node))
      })
  }

  private newCanvas(domNode: HTMLElement): HTMLCanvasElement {
    const { width, height, bgcolor } = this.options
    const canvas = document.createElement('canvas')
    canvas.width = width || nodeWidth(domNode)
    canvas.height = height || nodeHeight(domNode)

    if (bgcolor) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.fillStyle = bgcolor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    return canvas
  }
}
