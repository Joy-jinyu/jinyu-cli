import { asArray } from ".";
import { Inliner } from "./inliner";

export class FontFaces {
  constructor() {
  }

  public resolveAll() {
    document.querySelector
    return this.readAll(document)
        .then((webFonts) => Promise.all(
                webFonts.map((webFont) => webFont.resolve())
            ))
        .then((cssStrings) => cssStrings.join('\n'));
  }

  private readAll(dom: Document) {
    return Promise.resolve(asArray<StyleSheetList, CSSStyleSheet>(dom.styleSheets))
        .then(this.getCssRules)
        .then(this.selectWebFontRules)
        .then((rules) => rules.map(this.newWebFont));
  }

  private getCssRules(styleSheets: CSSStyleSheet[]) {
      const cssRules: CSSRule[] = [];
      styleSheets.forEach((sheet) => {
          try {
            asArray<CSSRuleList, CSSRule>(sheet.cssRules)
              .forEach((rule: CSSRule) => {
              cssRules.push(rule);
            })
          } catch (e: any) {
              console.log(`Error while reading CSS rules from ${  sheet.href}`, e.toString());
          }
      });
      return cssRules;
  }



  private selectWebFontRules(cssRules: Array<CSSRule | CSSFontFaceRule>) {
    return cssRules
        .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
        .filter((rule) => {
          if (rule instanceof CSSFontFaceRule) {
            return Inliner.shouldProcess(rule.style.getPropertyValue('src'));
          }
          return false
        }) as CSSFontFaceRule[];
  }

  private newWebFont(webFontRule: CSSFontFaceRule) {
      return {
          resolve: function resolve() {
              const baseUrl = (webFontRule.parentStyleSheet || {}).href || '';
              return Inliner.inlineAll(webFontRule.cssText, baseUrl);
          },
          src () {
              return webFontRule.style.getPropertyValue('src');
          }
      };
  }
}

export const embedFonts = (node: HTMLElement | undefined) => {
  if (!node) return

  const fontFaces = new FontFaces()
  return fontFaces.resolveAll()
    .then((cssText) => {
        const styleNode = document.createElement('style');
        node.appendChild(styleNode);
        styleNode.appendChild(document.createTextNode(cssText));
        return node;
    });
}
