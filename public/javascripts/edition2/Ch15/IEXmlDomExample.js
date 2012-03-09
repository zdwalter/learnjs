//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/IEXmlDomExample.htm
//IE XML DOM Example
    
function createDocument(){
    if (typeof arguments.callee.activeXString != "string"){
        var versions = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0",
                        "MSXML2.DOMDocument"];

        for (var i=0,len=versions.length; i < len; i++){
            try {
                var xmldom = new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                return xmldom;
            } catch (ex){
                //skip
            }
        }
    }

    return new ActiveXObject(arguments.callee.activeXString);
}

var xmldom = createDocument();
xmldom.loadXML("<root><child/></root>");

print(xmldom.documentElement.tagName);  //"root"
print(xmldom.documentElement.firstChild.tagName); //"child"

var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);

var children = xmldom.getElementsByTagName("child");
print(children.length);   //2        

print(xmldom.xml);

    