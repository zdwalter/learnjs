//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/TextNodeExample06.htm
//Text Node Example 5
function addNode(){

    var element = document.createElement("div");
    element.className = "message";
    
    var textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    
    document.body.appendChild(element);
    
    var newNode = element.firstChild.splitText(5);
    print(element.firstChild.nodeValue);  //"Hello"
    print(newNode.nodeValue);             //" world!"
    print(element.childNodes.length);     //2

    
}

    