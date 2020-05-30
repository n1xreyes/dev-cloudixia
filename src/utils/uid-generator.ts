export function generateUID() {
    const baseID = new Date(Date.now());
    // tslint:disable-next-line:max-line-length
    return baseID.getDate() + '' + baseID.getMonth() + '' + baseID.getFullYear() + '' + baseID.getHours() + '' + baseID.getMinutes() + '' + baseID.getSeconds() + '' + baseID.getMilliseconds();
}
