//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/TextNodeExample01.htm
//Text Node Example
function changeText(){
    var div = document.getElementById("myDiv");
    div.firstChild.nodeValue = "Some other message";
}

    