//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/AttrExample01.htm
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

    