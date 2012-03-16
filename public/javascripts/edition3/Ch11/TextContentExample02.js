//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/TextContentExample02.htm
//TextContent Example 2
function getInnerText(){
    var div = document.getElementById("content");
    div.textContent = "Hello world!";   //works in Firefox, Safari, and Opera
}

    