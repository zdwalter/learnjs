//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMMouseScrollEventExample01.htm
//DOMMouseScroll Event Example
EventUtil.addHandler(window, "DOMMouseScroll", function(event){
    event = EventUtil.getEvent(event);
    print(event.detail);
});

    