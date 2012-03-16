//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/IEEventHandlerExample02.htm
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

    