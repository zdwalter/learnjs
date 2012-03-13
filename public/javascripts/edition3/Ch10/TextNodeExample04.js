//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/TextNodeExample04.htm
//Text Node Example 3
function addNode(){

    var element = document.createElement("div");
    element.className = "message";
    
    var textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    
    var anotherTextNode = document.createTextNode("Yippee!");
    element.appendChild(anotherTextNode);
    
    document.body.appendChild(element);
}

    