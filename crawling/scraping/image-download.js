var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var urlType = require('url');


var savedir = __dirname + "/img";
if (!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}
var url = "http://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.log("Error");
        return;
    }

    // 링크를 추출 하여 표시한다.
    $("img").each(function (idx) {

        var src = $(this).attr('src');
        src = urlType.resolve(url, src);

        // 파일 저장
        var fname = urlType.parse(src).pathname;
        fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');

        // 다운로드
        request(src).pipe(fs.createWriteStream(fname));
    });
});