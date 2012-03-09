//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/TextNodeExample.htm
//Text Node Example
function changeText(){
    var div = document.getElementById("myDiv");
    div.firstChild.nodeValue = "Some other message";
}

    