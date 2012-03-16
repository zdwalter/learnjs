//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DoubleClickExample01.htm
//Double Click Example
window.onload = function(){

    var div = document.getElementById("testDiv");
    div.onclick = div.onmousedown = div.onmouseup = div.ondblclick = function(event){
event = event || window.event;

var output = document.getElementById("output");
output.innerHTML += event.type + "<br>";        
    };

};
