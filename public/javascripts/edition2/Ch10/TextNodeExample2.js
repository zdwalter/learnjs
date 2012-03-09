//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/TextNodeExample2.htm
//Text Node Example 2
function changeText(){
    var div = document.getElementById("myDiv");
    div.firstChild.nodeValue = "Some <strong>other</strong> message";
}

    