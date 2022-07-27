/**
 * 克隆对象 如果属性有值 进行克隆
 * @param obj
 * @return object
 */
export function filterClone(obj: any) {
    let objClone: any = {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (typeof obj[key] === "object") {
                objClone[key] = filterClone(obj[key]);
            } else if (obj[key]) {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}
/**
 *
 * @param obj  拷贝对象
 * @param newObj
 * @returns  deepCopy
 */
export function deepClone(obj: any, newObj?: any) {
    let val = newObj || {};
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            val[key] = obj[key].constructor === Array ? [] : {};
            deepClone(obj[key], val[key]);
        } else {
            val[key] = obj[key];
        }
    }
    return val;
}

/**
 * 解析 url 中的某个参数
 *
 * @param search 查询链接
 * @param name
 * @returns
 */
export const getSearchParam = (search: string, name: string) => {
    const pattern = new RegExp(`[?&]${name}=([^&]+)`, "gi");
    const matcher = pattern.exec(search);
    return matcher && matcher.length === 2 ? matcher[1] : "";
};
