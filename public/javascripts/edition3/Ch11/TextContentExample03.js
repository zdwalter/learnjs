//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/TextContentExample03.htm
//TextContent Example 3
function setInnerText(){
    var div = document.getElementById("content");
    div.textContent = "Hello & welcome, <b>\"reader\"!</b>";   //works in Firefox, Safari, and Opera
}

    