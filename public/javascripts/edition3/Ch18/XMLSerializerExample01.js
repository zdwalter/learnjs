//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/XMLSerializerExample01.htm
//XMLSerializer Example
    
var parser = new DOMParser();
var xmldom = parser.parseFromString("<root><child/></root>", "text/xml");

//convert back into XML
var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmldom);
print(xml);


    