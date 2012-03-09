//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMLevel2CoreExample.htm
//DOM Level 2 Core Example
    
var xmldom = document.implementation.createDocument("", "root", null);

print(xmldom.documentElement.tagName);  //"root"
       
var child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);


    