//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/TextNodeExample3.htm
//Text Node Example 3
function addNode(){

    var element = document.createElement("div");
    element.className = "message";
    
    var textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    
    document.body.appendChild(element);
}

    