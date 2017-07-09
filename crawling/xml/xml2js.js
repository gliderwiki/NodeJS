var parseString = require('xml2js').parseString;

var xml = "<fruites shop='AAA'>" +
        "<item price='130'>Banana</item>" +
        "<item price='190'>Apple</item>" +
        "</fruites>";

// xml 전달
parseString(xml, function (err, result) {
    // 파싱 결과
    console.log(JSON.stringify(result));
});