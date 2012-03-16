//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/OuterTextExample02.htm
//OuterText Example 2
function getOuterText(){
    var div = document.getElementById("content");
    div.outerText = "Hello world!";  //works in IE, Safari, and Opera
}

function getElement(){
    print(document.getElementById("content"));
}
    