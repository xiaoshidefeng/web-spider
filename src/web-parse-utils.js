/**
 * @file 网页解析工具类
 */


/**
 * 检查 a 标签是否合法
 * @param {string} webUrl a 标签链接
 * @returns {boolean} 合法返回true,否则返回false
 */
function isLegalUrl(webUrl) {
    if (webUrl !== undefined && webUrl !== 'undefined' && !webUrl.startsWith('javascript')) {
        return true;
    }
    return false;
}

/**
 * 检查 img 标签是否不是base64格式
 * @param {string} url 图片链接
 * @returns {boolean} 是图片链接返回true,不是返回false
 */
function imageUrlNotBase64(url) {
    if (url.startWith('data')) {
        return false;
    }
    return true;
}

/**
 * 将相对路径转为绝对路径
 * @param {string} webUrl 解析得到的路径
 * @param {string} host 页面链接
 * @returns {string} 绝对路径
 */
function formatUrlToAbsoultePath(webUrl, host) {
    // 判断是否是绝对路径
    if (webUrl.startWith('http')) {
        return webUrl;
    }
    if (host.endsWith('/')) {
        host = host .substring(0, host.length -1);
    }
    if (webUrl.startWith('/')) {
        return host + webUrl;
    }
    return host + '/' + webUrl;
}


export {
    isLegalUrl,
    imageUrlNotBase64,
    formatUrlToAbsoultePath
}
