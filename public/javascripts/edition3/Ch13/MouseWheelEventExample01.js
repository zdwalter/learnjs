//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/MouseWheelEventExample01.htm
//MouseWheel Event Example
EventUtil.addHandler(document, "mousewheel", function(event){
    event = EventUtil.getEvent(event);
    var delta = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
    print(delta);
});

    