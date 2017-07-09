var client = require('cheerio-httpcli');
var urlType = require('url');

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
        console.log(src);
    });
});