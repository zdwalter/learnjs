//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/NodeInsertionEventsExample.htm
//Node Insertion Events Example
EventUtil.addHandler(window, "load", function(event){
    var list = document.getElementById("myList");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode("Item 4"));
    
    EventUtil.addHandler(document, "DOMSubtreeModified", function(event){
        print(event.type);
        print(event.target);
    });
    EventUtil.addHandler(document, "DOMNodeInserted", function(event){
        print(event.type);
        print(event.target);
        print(event.relatedNode);
    });
    EventUtil.addHandler(item, "DOMNodeInsertedIntoDocument", function(event){
        print(event.type);
        print(event.target);
    });            
    
    list.appendChild(item);
});

    