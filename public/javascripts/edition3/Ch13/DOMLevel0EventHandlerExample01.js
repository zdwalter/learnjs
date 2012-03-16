//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMLevel0EventHandlerExample01.htm
//DOM Level 0 Event Handler Example
var btn = document.getElementById("myBtn");
btn.onclick = function(){
    print(this.id);
};

var removeBtn = document.getElementById("myRemoveBtn");
removeBtn.onclick = function(){
    btn.onclick = null;
};
    