const SCENDS = 1000;

/**
 * 
 * @param times 时间的毫秒值
 * @returns 距离现在过了多少秒
 */
const scendsTakenTo = (times: number): number => {
    return Math.ceil((new Date().getTime() - times) / SCENDS);
}

export default scendsTakenTo;