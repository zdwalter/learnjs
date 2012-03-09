//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMLevel0EventHandlerExample.htm
//DOM Level 0 Event Handler Example
var btn = document.getElementById("myBtn");
btn.onclick = function(){
    print(this.id);
};

var removeBtn = document.getElementById("myRemoveBtn");
removeBtn.onclick = function(){
    btn.onclick = null;
};
    