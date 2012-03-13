//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/TextNodeExample05.htm
//Text Node Example 5
function addNode(){

    var element = document.createElement("div");
    element.className = "message";
    
    var textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    
    var anotherTextNode = document.createTextNode("Yippee!");
    element.appendChild(anotherTextNode);
    
    document.body.appendChild(element);
    
    print(element.childNodes.length);  //2
    
    element.normalize();
    print(element.childNodes.length);  //1
    print(element.firstChild.nodeValue);  //"Hello World!Yippee!"
    
}

    