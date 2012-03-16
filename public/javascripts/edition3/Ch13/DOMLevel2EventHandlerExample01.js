//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMLevel2EventHandlerExample01.htm
//DOM Level 2 Event Handler Example
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(){
    print(this.id);
}, false);
btn.addEventListener("click", function(){
    print("Hello world!");
}, false);

    