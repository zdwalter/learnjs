//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMMouseScrollEventExample.htm
//DOMMouseScroll Event Example
EventUtil.addHandler(window, "DOMMouseScroll", function(event){
    event = EventUtil.getEvent(event);
    print(event.detail);
});

    