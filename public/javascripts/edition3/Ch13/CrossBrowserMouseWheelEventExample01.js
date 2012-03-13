//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/CrossBrowserMouseWheelEventExample01.htm
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
    