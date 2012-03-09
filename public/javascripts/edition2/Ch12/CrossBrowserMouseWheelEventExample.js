//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/CrossBrowserMouseWheelEventExample.htm
//MouseWheel Event Example
    (function(){
    
function handleMouseWheel(event){
    event = EventUtil.getEvent(event);
    var delta = EventUtil.getWheelDelta(event);
    print(delta);
}

EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);

    })();
    