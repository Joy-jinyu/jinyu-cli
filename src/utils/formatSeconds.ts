//  秒数转化为时分秒
const formatSeconds = (value: number) => {
    let second = Math.floor(value);
    let minute = 0;
    let hour = 0;
    if (second > 60) {
        minute = Math.floor(second / 60);
        second = Math.floor(second % 60);
        if (minute > 60) {
            hour = Math.floor(minute / 60);
            minute = Math.floor(minute % 60);
        }
    }

    let result = '' + Math.floor(second) + 's';
    if (minute > 0) {
        result = '' + Math.floor(minute) + 'm' + result;
    }
    if (hour > 0) {
        result = '' + Math.floor(hour) + 'h' + result;
    }
    return result;
};

export default formatSeconds;
