//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/OuterHTMLExample01.htm
//OuterHTML Example
function getOuterHTML(){
    var div = document.getElementById("content");
    print(div.outerHTML);  //works in IE, Safari, and Opera
}

    