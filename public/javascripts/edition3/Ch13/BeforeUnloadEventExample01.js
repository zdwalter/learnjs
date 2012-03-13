//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/BeforeUnloadEventExample01.htm
//BeforeUnload Event Example
EventUtil.addHandler(window, "beforeunload", function(event){
    event = EventUtil.getEvent(event);
    var message = "I'm really going to miss you if you go.";
    event.returnValue = message;
    return message;
});

    