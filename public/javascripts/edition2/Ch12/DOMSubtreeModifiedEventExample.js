//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMSubtreeModifiedEventExample.htm
//DOMSubtreeModified Event Example
EventUtil.addHandler(window, "load", function(event){
    document.body.appendChild(document.createTextNode("Hello world!"));
});
EventUtil.addHandler(document, "DOMSubtreeModified", function(event){
    print(event.type);
});
    