/**
 *
 * @param url  下载url
 * @returns
 */
export const downloadFile = (url: string) => {
    if (!url) return;
    let link = document.createElement("a"); //创建a标签
    link.style.display = "none"; //使其隐藏
    link.href = url; //赋予文件下载地址
    document.body.appendChild(link); //a标签插至页面中
    link.click(); //强制触发a标签事件
    document.body.removeChild(link);
};
