//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMParserExample.htm
//DOMParser Example
    
var parser = new DOMParser();
var xmldom = parser.parseFromString("<root><child/></root>", "text/xml");

print(xmldom.documentElement.tagName);  //"root"
print(xmldom.documentElement.firstChild.tagName); //"child"

var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);

var children = xmldom.getElementsByTagName("child");
print(children.length);   //2

    