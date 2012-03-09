//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/AttributeChangeEventExample.htm
//Attribute Change Events Example
EventUtil.addHandler(window, "load", function(event){
    var list = document.getElementById("myList");
                
    EventUtil.addHandler(document, "DOMSubtreeModified", function(event){
        print(event.type);
        print(event.target);
    });
    EventUtil.addHandler(document, "DOMAttrModified", function(event){
        print(event.type);
        print(event.target);
        print(event.relatedNode);
        print(event.attrName);
        print(event.attrChange);
        print(event.prevValue);
        print(event.newValue);
    });     
    
    list.setAttribute("customname", "value");
});

    