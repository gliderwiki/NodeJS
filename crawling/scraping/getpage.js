var client = require('cheerio-httpcli');

var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function (err, $, res) {   // 에러 정보, 취득한 데이터, 서버의 응답 정보
    if (err) {
        console.log('Error: ', err);
        return;
    }

    var body = $.html();
    console.log(body);
})