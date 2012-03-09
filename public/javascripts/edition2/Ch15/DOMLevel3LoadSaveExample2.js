//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMLevel3LoadSaveExample2.htm
//DOM Level 3 Load Save Example
    
var implementation = document.implementation;
var parser = implementation.createLSParser(implementation.MODE_SYNCHRONOUS, null);
var input = implementation.createLSInput();
input.stringData = "<root>";
var xmldom = null;

try {
    xmldom = parser.parse(input);
} catch (ex){
    print("Parsing error!");
}

    