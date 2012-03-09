//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMLevel3LoadSaveExample8.htm
//DOM Level 3 Load Save Example
    
var implementation = document.implementation;
var serializer = implementation.createLSSerializer();
serializer.domConfig.setParameter("format-pretty-print", true);
var xml = "";

try {
    xml = serializer.writeToString("blah");  //throws error
    print(xml);
} catch (ex){
    print("Serialization error occurred.");
}

    