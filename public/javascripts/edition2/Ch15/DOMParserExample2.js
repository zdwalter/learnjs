//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMParserExample2.htm
//DOMParser Example
    
var parser = new DOMParser();
var xmldom = parser.parseFromString("<root>", "text/xml");  //should cause a parse error
var errors = xmldom.getElementsByTagName("parsererror");

if (errors.length > 0){
    var serializer = new XMLSerializer();            
    print("XML Parsing Error:" + serializer.serializeToString(xmldom, "text/xml"));            
}


    