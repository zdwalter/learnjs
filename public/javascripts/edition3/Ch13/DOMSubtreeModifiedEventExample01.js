//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMSubtreeModifiedEventExample01.htm
//DOMSubtreeModified Event Example
EventUtil.addHandler(window, "load", function(event){
    document.body.appendChild(document.createTextNode("Hello world!"));
});
EventUtil.addHandler(document, "DOMSubtreeModified", function(event){
    print(event.type);
});
    