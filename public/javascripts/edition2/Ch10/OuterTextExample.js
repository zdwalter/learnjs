//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/OuterTextExample.htm
//OuterText Example
function getOuterText(){
    var div = document.getElementById("content");
    print(div.outerText);  //works in IE, Safari, and Opera
}
    