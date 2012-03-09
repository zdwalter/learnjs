//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/ContainsExample2.htm
//Contains Example 2
    
function contains(refNode, otherNode){
    if (typeof refNode.contains == "function" && 
            (!client.engine.webkit || client.engine.webkit >= 522)){
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function"){
        return !!(refNode.compareDocumentPosition(otherNode) & 16);
    } else {
        var node = otherNode.parentNode;
        do {
            if (node === refNode){
                return true;
            } else {
                node = node.parentNode;
            }
        } while (node !== null);
        return false;
    }
}
    
function getContains(){
    print(contains(document.documentElement, document.body));
    
}

    