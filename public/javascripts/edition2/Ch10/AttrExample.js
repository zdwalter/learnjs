//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/AttrExample.htm
//Attr Example
function assignAttribute(){
    var element = document.getElementById("myDiv");
    var attr = document.createAttribute("align");
    attr.value = "left";
    element.setAttributeNode(attr);
    
    print(element.attributes["align"].value);       //"left"
    print(element.getAttributeNode("align").value); //"left"
    print(element.getAttribute("align"));           //"left"

    
}

    