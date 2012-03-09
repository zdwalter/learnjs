//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMLevel2EventHandlerExample.htm
//DOM Level 2 Event Handler Example
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(){
    print(this.id);
}, false);
btn.addEventListener("click", function(){
    print("Hello world!");
}, false);

    