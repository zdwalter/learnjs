//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/IEEventHandlerExample2.htm
//Internet Explorer Event Handler Example
var btn = document.getElementById("myBtn");
var handler = function(){
    print("Clicked");
};
btn.attachEvent("onclick", handler); 

var removeBtn = document.getElementById("myRemoveBtn");
removeBtn.onclick = function(){
    btn.detachEvent("onclick", handler); 
};

    