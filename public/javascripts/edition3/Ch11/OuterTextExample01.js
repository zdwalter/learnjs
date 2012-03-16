//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/OuterTextExample01.htm
//OuterText Example
function getOuterText(){
    var div = document.getElementById("content");
    print(div.outerText);  //works in IE, Safari, and Opera
}
    