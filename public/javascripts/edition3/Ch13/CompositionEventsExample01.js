//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/CompositionEventsExample01.htm
//Composition Events Example
var textbox = document.getElementById("myText");
if (document.implementation.hasFeature("CompositionEvent", "3.0")){
    EventUtil.addHandler(textbox, "compositionstart", function(event){
        event = EventUtil.getEvent(event);
        print(event.data);     
    });
    EventUtil.addHandler(textbox, "compositionupdate", function(event){
        event = EventUtil.getEvent(event);
        print(event.data);     
    });
    EventUtil.addHandler(textbox, "compositionend", function(event){
        event = EventUtil.getEvent(event);
        print(event.data);     
    });
} else {
    document.write("<p>Your browser does not support composition events.</p>");
}
    