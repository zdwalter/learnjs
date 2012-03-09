//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/TextContentExample3.htm
//TextContent Example 3
function setInnerText(){
    var div = document.getElementById("content");
    div.textContent = "Hello & welcome, <b>\"reader\"!</b>";   //works in Firefox, Safari, and Opera
}

    