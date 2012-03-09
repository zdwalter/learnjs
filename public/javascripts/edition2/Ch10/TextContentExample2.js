//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/TextContentExample2.htm
//TextContent Example 2
function getInnerText(){
    var div = document.getElementById("content");
    div.textContent = "Hello world!";   //works in Firefox, Safari, and Opera
}

    