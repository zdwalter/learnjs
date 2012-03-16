//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/TextChangeEventExample01.htm
//Text Change Events Example
EventUtil.addHandler(window, "load", function(event){
    var div = document.getElementById("myDiv");
                
    EventUtil.addHandler(document, "DOMSubtreeModified", function(event){
        print(event.type);
        print(event.target);
    });
    EventUtil.addHandler(document, "DOMCharacterDataModified", function(event){
        print(event.type);
        print(event.target);
        print(event.prevValue);
        print(event.newValue);
    });     
    
    div.firstChild.nodeValue = "Some new text";
});

    