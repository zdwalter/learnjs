//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DOMLevel3LoadSaveExample6.htm
//DOM Level 3 Load Save Example
    
var implementation = document.implementation;
var parser = implementation.createLSParser(implementation.MODE_SYNCHRONOUS, null);
var input = implementation.createLSInput();
input.stringData = "<root/>";

var xmldom = parser.parse(input);
var newInput = implementation.createLSInput();
newInput.stringData ="<child/>";

parser.parseWithContext(newInput, xmldom.documentElement, parser.ACTION_APPEND_AS_CHILDREN);

print(xmldom.documentElement.firstChild.tagName);


    