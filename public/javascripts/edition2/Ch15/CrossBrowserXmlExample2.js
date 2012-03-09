//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/CrossBrowserXmlExample2.htm
//Cross-Browser XML Example
    
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
    
function serializeXml(xmldom){
   
    if (typeof XMLSerializer != "undefined"){
        return (new XMLSerializer()).serializeToString(xmldom);
    } else if (document.implementation.hasFeature("LS", "3.0")){
        var implementation = document.implementation;
        var serializer = implementation.createLSSerializer();
        return serializer.writeToString(xmldom);     
    } else if (typeof xmldom.xml != "undefined"){
        return xmldom.xml;
    } else {
        throw new Error("Could not serialize XML DOM.");
    }
}

function parseXml(xml){
    var xmldom = null;
    
    if (typeof DOMParser != "undefined"){
        xmldom = (new DOMParser()).parseFromString(xml, "text/xml");
        var errors = xmldom.getElementsByTagName("parsererror");
        if (errors.length){
            throw new Error("XML parsing error:" + errors[0].textContent);
        }
    } else if (document.implementation.hasFeature("LS", "3.0")){
        var implementation = document.implementation;
        var parser = implementation.createLSParser(implementation.MODE_SYNCHRONOUS, null);
        var input = implementation.createLSInput();
        input.stringData = xml;
        xmldom = parser.parse(input);            
    } else if (typeof ActiveXObject != "undefined"){
        xmldom = createDocument();
        xmldom.loadXML(xml);
        if (xmldom.parseError != 0){
            throw new Error("XML parsing error: " + xmldom.parseError.reason);
        }
    } else {
        throw new Error("No XML parser available.");
    }
    
    return xmldom;
}        
    
var xmldom = null;
try {
    xmldom = parseXml("<root><child/></root>");
} catch (ex){
    print(ex.message);
}

print(serializeXml(xmldom));


    