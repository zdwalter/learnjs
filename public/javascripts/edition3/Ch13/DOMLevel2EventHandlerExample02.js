//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMLevel2EventHandlerExample02.htm
//DOM Level 2 Event Handler Example
var btn = document.getElementById("myBtn");
var handler = function(){
    print(this.id);
};
btn.addEventListener("click", handler, false); 

var removeBtn = document.getElementById("myRemoveBtn");
removeBtn.onclick = function(){
    btn.removeEventListener("click", handler, false);  //works!
};

    