//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/OuterHTMLExample.htm
//OuterHTML Example
function getOuterHTML(){
    var div = document.getElementById("content");
    print(div.outerHTML);  //works in IE, Safari, and Opera
}

    