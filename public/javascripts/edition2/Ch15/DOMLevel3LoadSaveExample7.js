//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMLevel3LoadSaveExample7.htm
//DOM Level 3 Load Save Example
    
var implementation = document.implementation;
var parser = implementation.createLSParser(implementation.MODE_SYNCHRONOUS, null);
var input = implementation.createLSInput();
input.stringData = "<root><child/></root>";

var xmldom = parser.parse(input);

var serializer = implementation.createLSSerializer();
serializer.domConfig.setParameter("format-pretty-print", true);
var xml = serializer.writeToString(xmldom);
print(xml);


    