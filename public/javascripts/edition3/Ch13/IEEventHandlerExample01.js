//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/IEEventHandlerExample01.htm
//Internet Explorer Event Handler Example
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function(){
    print("Clicked");
});
btn.attachEvent("onclick", function(){
    print("Hello world!");
});

    