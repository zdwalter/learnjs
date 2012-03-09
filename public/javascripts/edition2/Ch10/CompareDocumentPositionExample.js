//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/CompareDocumentPositionExample.htm
//CompareDocumentPosition Example
function getContains(){
    var result = document.documentElement.compareDocumentPosition(document.body);
    print(!!(result && 16));
    
}

    