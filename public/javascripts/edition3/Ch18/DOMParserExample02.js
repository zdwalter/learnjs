//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DOMParserExample02.htm
//DOMParser Example
    
    
var parser = new DOMParser(),
    xmldom, 
    errors;
    
try {
    xmldom = parser.parseFromString("<root>", "text/xml");
    errors = xmldom.getElementsByTagName("parsererror");
    if (errors.length > 0){
        throw new Error("XML Parsing Error:" + (new XMLSerializer()).serializeToString(xmldom, "text/xml"));
    }
} catch (ex) {
    print(ex.message);
}



    