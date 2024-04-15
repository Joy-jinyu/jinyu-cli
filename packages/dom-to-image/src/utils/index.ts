/*
  * Only WOFF and EOT mime types for fonts are 'real'
  * see http://www.iana.org/assignments/media-types/media-types.xhtml
  */
const WOFF = 'application/font-woff'
const JPEG = 'image/jpeg'

const mimes: Record<string, string> = {
  'woff': WOFF,
  'woff2': WOFF,
  'ttf': 'application/font-truetype',
  'eot': 'application/vnd.ms-fontobject',
  'png': 'image/png',
  'jpg': JPEG,
  'jpeg': JPEG,
  'gif': 'image/gif',
  'tiff': 'image/tiff',
  'svg': 'image/svg+xml'
}

/** 请求资源的类型 */
export const parseExtension = (url: string) => {
    const match = /\.([^\.\/]*?)$/g.exec(url)
    if (match) return match[1]
    return ''
}

/** 请求资源的请求头 */
export const mimeType = (url: string) => {
    const extension = parseExtension(url).toLowerCase()
    return mimes[extension] || ''
}

/** 请求资源包含 data: */
export const isDataUrl = (url: string) => url.search(/^(data:)/) !== -1

export const toBlob = (canvas: HTMLCanvasElement) => new Promise((resolve) => {
        const binaryString = window.atob(canvas.toDataURL().split(',')[1])
        const {length} = binaryString
        const binaryArray = new Uint8Array(length)

      for (let i = 0; i < length; i++)
            binaryArray[i] = binaryString.charCodeAt(i)

        resolve(new Blob([binaryArray], {
            type: 'image/png'
        }))
    })

export const canvasToBlob = (canvas: HTMLCanvasElement) => {
    if (canvas.toBlob)
        return new Promise((resolve) => {
            canvas.toBlob(resolve)
        })

    return toBlob(canvas)
}

export const resolveUrl = (url: string, baseUrl: string) => {
    const doc = document.implementation.createHTMLDocument()
    const base = doc.createElement('base')
    doc.head.appendChild(base)
    const a = doc.createElement('a')
    doc.body.appendChild(a)
    base.href = baseUrl
    a.href = url
    return a.href
}

export const uid = (() => {
    let index = 0

    return () => {
        const fourRandomChars = () => 
            /* see http://stackoverflow.com/a/6248722/2519373 */
             (`0000${  (Math.random() * 36**4 << 0).toString(36)}`).slice(-4)
        

        return `u${  fourRandomChars()  }${index++}`
    }
})()

export const makeImage = async (uri: string | undefined): Promise<HTMLImageElement | undefined> => {
  if (!uri) return

  return await new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
          resolve(image)
      }
      image.onerror = () => {
        reject(`图片加载失败: ${uri}`)
      }
      image.src = uri
  })
}

export const getAndEncode = (url: string, {
  cacheBust = false,
  imagePlaceholder = undefined
}: {
  cacheBust?: boolean
  imagePlaceholder?: string
} = {}): Promise<string> => {
    const TIMEOUT = 30000
    if (cacheBust) {
        // Cache bypass so we dont have CORS issues with cached images
        // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
        url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime()
    }

    return new Promise((resolve) => {
        const request = new XMLHttpRequest()
        const done = () => {
            if (request.readyState !== 4) return

            if (request.status !== 200) {
                if(placeholder) {
                    resolve(placeholder)
                } else {
                    fail(`cannot fetch resource: ${  url  }, status: ${  request.status}`)
                }

                return
            }

            const encoder = new FileReader()
            encoder.onloadend = () => {
                const result: string = encoder?.result as string || ''
                const content = result.split(/,/)[1]
                resolve(content)
            }
            encoder.readAsDataURL(request.response)
        }

        const timeout = () => {
            if(placeholder) {
                resolve(placeholder)
            } else {
                fail(`timeout of ${  TIMEOUT  }ms occured while fetching resource: ${  url}`)
            }
        }

        const fail = (message: string) => {
            console.error(message)
            resolve('')
        }

        request.onreadystatechange = done
        request.ontimeout = timeout
        request.responseType = 'blob'
        request.timeout = TIMEOUT
        request.open('GET', url, true)
        request.send()

        let placeholder: string
        if(imagePlaceholder) {
            const split = imagePlaceholder.split(/,/)
            if(split && split[1]) {
                placeholder = split[1]
            }
        }
    })
}

export const dataAsUrl = (content: string, type: string) => `data:${  type  };base64,${  content}`

export const escape = (string: string) => string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1')

export const delay = (ms: number) => (arg: any) => new Promise((resolve) => {
            setTimeout(() => {
                resolve(arg)
            }, ms)
        })


export const asArray = <T extends NodeList | CSSStyleDeclaration | StyleSheetList | CSSRuleList, U>(arrayLike: T): U[] => {
    const array = []
    const {length} = arrayLike
    for (let i = 0; i < length; i++) array.push(arrayLike[i])
    return array as U[]
}

export const escapeXhtml = (string: string) => string.replace(/#/g, '%23').replace(/\n/g, '%0A')

export const nodeWidth = (node: HTMLElement) => {
    const leftBorder = px(node, 'border-left-width')
    const rightBorder = px(node, 'border-right-width')
    return node.scrollWidth + leftBorder + rightBorder
}

export const nodeHeight = (node: HTMLElement) => {
    const topBorder = px(node, 'border-top-width')
    const bottomBorder = px(node, 'border-bottom-width')
    return node.scrollHeight + topBorder + bottomBorder
}

export const px = (node: HTMLElement, styleProperty: string) => {
    const value = window.getComputedStyle(node).getPropertyValue(styleProperty)
    return parseFloat(value.replace('px', ''))
}
