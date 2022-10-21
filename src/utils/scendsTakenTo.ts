const scendsTakenTo = times => {
    const SCENDS = 1000;
    return Number.parseInt((new Date().getTime() - times) / SCENDS);
}

export default scendsTakenTo;