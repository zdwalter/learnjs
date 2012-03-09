//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMLevel2EventHandlerExample2.htm
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

    