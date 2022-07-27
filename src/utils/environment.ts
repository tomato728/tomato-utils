/**
 *判断是否为微信环境
 * @returns
 */
export const isWechat = () => String(globalThis.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
/**
 * ios终端
 */
export const isiOS: boolean | any = () => {
    return !!globalThis.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
/**
 * 是否是 android终端
 */
export const isAndroid: boolean = globalThis.navigator?.userAgent.indexOf("Android") > -1 || globalThis.navigator?.userAgent.indexOf("Adr") > -1;
