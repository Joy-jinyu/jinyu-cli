import { dataAsUrl, escape, getAndEncode, isDataUrl, mimeType, resolveUrl } from ".";

export class Inliner {
  private static URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

  public static shouldProcess(url: string) {
      return url.search(this.URL_REGEX) !== -1;
  }

  public static readUrls(url: string) {
      var result = [];
      var match;
      while ((match = this.URL_REGEX.exec(url)) !== null) {
          result.push(match[1]);
      }
      return result.filter(function (url) {
          return !isDataUrl(url);
      });
  }

  public static inlineAll(link: string, baseUrl = '') {
    if (!this.shouldProcess(link)) return Promise.resolve(link);

    return Promise.resolve(link)
        .then(this.readUrls)
        .then((urls) => {
            var done = Promise.resolve(link);
            urls.forEach((url) => {
                done = done.then((_link) => {
                    return this.inline(_link, url, baseUrl);
                });
            });
            return done;
        });
  }

  public static inline(link: string, url: string, baseUrl: string) {
    const urlAsRegex = (_url: string) => {
      return new RegExp('(url\\([\'"]?)(' + escape(_url) + ')([\'"]?\\))', 'g');
    }
      return Promise.resolve(url)
          .then(function (url) {
              return baseUrl ? resolveUrl(url, baseUrl) : url;
          })
          .then(getAndEncode)
          .then((data) => {
              return dataAsUrl(data, mimeType(url));
          })
          .then((dataUrl) => {
              return link.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
          });
  }
}
