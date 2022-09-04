const https = require('https');
const cheerio = require('cheerio');
// https.get('https://movie.douban.com/top250',function(res){
let host = 'https://tool.lu/';
https.get(host, function(res) {
    // 分段返回的 自己拼接
    let html = '';
    // 有数据产生的时候 拼接
    res.on('data',function(chunk){
        html += chunk;
    })
    // 拼接完成
    res.on('end',function(){
        const $ = cheerio.load(html);

        $('img').each(function(){
            let imageUrl = $(this).attr('src');
            if (imageUrlNotBase64(imageUrl)) {
                imageUrl = formatUrlToAbsolutePath(imageUrl, host);
                console.log(imageUrl);
            }
        });
        $('a').each(function(){
            const webUrl = $(this).attr('href');
            if (webUrl !== 'javascript:;') {
                imageUrl = formatUrlToAbsolutePath(webUrl, host);
                console.log(webUrl);
            }
            
        });
    });
});

function imageUrlNotBase64(url) {
    if (url.startsWith(0, 4) === 'data') {
        return false;
    }
    return true;
}

function formatUrlToAbsolutePath(url, host) {
    if (url.startsWith('http')) {
        return url;
    }
    if (host.endsWith('/')) {
        host = host.substring(0, host.length - 1);
    }
    if (url.startsWith('/')) {
        return host + url;
    }
    return host + '/' + url;
}


