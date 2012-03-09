//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/BeforeUnloadEventExample.htm
//BeforeUnload Event Example
EventUtil.addHandler(window, "beforeunload", function(event){
    event = EventUtil.getEvent(event);
    event.returnValue = "I'm really going to miss you if you go.";
});

    