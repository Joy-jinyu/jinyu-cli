import { DomToImage } from '../src'

const defaultOptions = {
  // 填充默认选项值，如需测试默认行为，请确保它们与实际代码中的默认值一致
};

describe('DomToImage', () => {
  let testNode: HTMLElement;
  let domToImage: DomToImage;

  beforeEach(() => {
    testNode = document.createElement('div');
    testNode.style.width = '200px';
    testNode.style.height = '150px';
    testNode.innerHTML = '<p>Hello, World!</p>';
    document.body.appendChild(testNode);

    domToImage = new DomToImage(defaultOptions);
  });

  afterEach(() => {
    document.body.removeChild(testNode);
  });

  describe('toPng', () => {
    it('should convert a DOM node to a PNG data URL', async () => {
      const pngDataUrl = await domToImage.toPng(testNode);
      expect(pngDataUrl.startsWith('data:image/png')).toBe(true);
    });

    // 添加更多测试用例，例如测试不同选项对结果的影响
  });

  describe('toSvg', () => {
    it('should convert a DOM node to an SVG string', async () => {
      const svgString = await domToImage.toSvg(testNode) || '';
      expect(svgString.startsWith('<svg')).toBe(true);
    });

    // 添加更多测试用例，例如测试不同选项对结果的影响
  });
});
