// 最长完整展示的字符串长度
const TEXT_MAX_LEN = 12;
// 字符串前后预留长度
const TEXT_SPLIT_LEN = 6;

/**
 * @description 长文本截取
 * @param text 需要处理的字符串
 * @param replaceStr 需要替换的字符 默认 ...
 * @returns 
 */
const overLenTextShow = (text = '', replaceStr = '...') => {
    if (text.length > TEXT_MAX_LEN) {
        return text.replace(text.slice(TEXT_SPLIT_LEN, text.length - TEXT_SPLIT_LEN), replaceStr);
    }
    return text;
};

export default overLenTextShow