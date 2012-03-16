//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/ReadyStateChangeEventExample01.htm
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

    