//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/IEEventHandlerExample.htm
//Internet Explorer Event Handler Example
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function(){
    print("Clicked");
});
btn.attachEvent("onclick", function(){
    print("Hello world!");
});

    