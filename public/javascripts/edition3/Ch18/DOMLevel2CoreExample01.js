//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DOMLevel2CoreExample01.htm
//DOM Level 2 Core Example
    
var xmldom = document.implementation.createDocument("", "root", null);

print(xmldom.documentElement.tagName);  //"root"
       
var child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);


    