//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/LoadEventExample.htm
//Load Event Example
EventUtil.addHandler(window, "load", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    print(target);
});
    