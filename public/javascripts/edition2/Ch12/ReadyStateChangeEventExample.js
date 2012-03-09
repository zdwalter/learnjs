//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/ReadyStateChangeEventExample.htm
//Ready State Change Event Example

EventUtil.addHandler(document, "readystatechange", function(event){
    if (document.readyState == "interactive" || document.readyState == "complete"){
        EventUtil.removeHandler(document, "readystatechange", arguments.callee); 
        print("Content loaded");                      
    }
});
EventUtil.addHandler(window, "load", function(event){
    print("Window loaded");
});

    