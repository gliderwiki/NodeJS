$(function() {
    var $h1 = $("h1");
    var $zip = $("input[name='zip']");

    $("form").on("submit", function(event) {
        event.preventDefault();


        var zipCode = $.trim($zip.val());
        $h1.text("Loading...");

        console.log("zipCode : " + zipCode);


        var request = $.ajax({
            url : "/" + zipCode,
            dataType : "json"
        });

        request.done(function(data) {
            console.log("data : " + data);
            var temperature = data.temperature;
            $h1.html("It is " + temperature + "&#176; in " + zipCode + ".");        //&#176; 은 온도 기호에 대한 html 문자 코드
        });

        request.fail(function() {
            $h1.text("Error!");
        });
    });
});