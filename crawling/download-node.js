/**
 * url 에 있는 파일을 savepath에 다운로드 한다
 */

var url = "http://jpub.tistory.com/";

var savePath = "test.html";

var http = require("http");
var fs = require('fs');

// 출력 저장
var outfile = fs.createWriteStream(savePath);

// 비동기로 파일 다운로드
http.get(url, function (res) {
    res.pipe(outfile);
    res.on('end', function () {
        outfile.close();
        console.log("ok!");
    });
});
