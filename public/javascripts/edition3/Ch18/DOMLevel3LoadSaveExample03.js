//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DOMLevel3LoadSaveExample03.htm
//DOM Level 3 Load Save Example
    
var implementation = document.implementation;
var parser = implementation.createLSParser(implementation.MODE_ASYNCHRONOUS, null);
var input = implementation.createLSInput();
input.stringData = "<root><child/></root>";
parser.addEventListener("load", function(event){
    var xmldom = event.newDocument;
    var input = event.input;
    
    print(xmldom.documentElement.tagName);  //"root"
    print(xmldom.documentElement.firstChild.tagName); //"child"
    
    var anotherChild = xmldom.createElement("child");
    xmldom.documentElement.appendChild(anotherChild);
    
    var children = xmldom.getElementsByTagName("child");
    print(children.length);   //2
}, false);

parser.parse(input);

    