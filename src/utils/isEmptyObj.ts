/**
 * @description 判断对象是否为空
 * @param obj 判断对象
 * @returns boolean
 */
const isEmptyObj = (obj = {}) => {
    return !Object.keys(obj).length;
};

export default isEmptyObj;