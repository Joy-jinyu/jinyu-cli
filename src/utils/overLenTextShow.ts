const TEXT_MAX_LEN = 12;
const TEXT_SPLIT_LEN = 6;

const overLenTextShow = (text = '') => {
    if (text.length > TEXT_MAX_LEN) {
        return text.replace(text.slice(TEXT_SPLIT_LEN, text.length - TEXT_SPLIT_LEN), '...');
    }
    return text;
};

export default overLenTextShow