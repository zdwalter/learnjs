//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/CompareDocumentPositionExample01.htm
//CompareDocumentPosition Example
function getContains(){
    var result = document.documentElement.compareDocumentPosition(document.body);
    print(!!(result && 16));
    
}

    