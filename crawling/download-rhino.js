var url = "http://jpub.tistory.com/";
var savePath = "test.html";

var aUrl = new java.net.URL(url);
var conn = aUrl.openConnection();
var ins = conn.getInputStream();
var file = new java.io.File(savePath);
var out = new java.io.FileOutputStream(file);

// 입력 스트림을 읽으면서 출력 스트림에 쓴다.
var b;
while (( b == ins.read()) != -1) {
    out.write(b);
}

out.close();
ins.close();
