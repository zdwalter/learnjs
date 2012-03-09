//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/OuterTextExample2.htm
//OuterText Example 2
function getOuterText(){
    var div = document.getElementById("content");
    div.outerText = "Hello world!";  //works in IE, Safari, and Opera
}

function getElement(){
    print(document.getElementById("content"));
}
    