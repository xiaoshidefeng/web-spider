/**
 * @file 日志文件
 */

import * as fs from 'fs';

let logPath ='';

function initLogPath(path) {
    logPath = path;
}

function getFormatTime() {
    const timestamp = Math.floor(Date.now() / 1000);
    const date = new Date(parseInt(timestamp) * 1000);
    const y = date.getMonth() + 1;
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
}

function writeInfoLog(msg) {
    fs.appendFileSync(logPath, getFormatTime() + 'INFO:' + msg + '\n');
}

function writeErrorLog(errorMsg, error) {
    fs.appendFileSync(logPath, getFormatTime() + 'ERROR: ' + errorMsg + error + '\n');
}

export {
    initLogPath,
    writeErrorLog,
    writeInfoLog
};
