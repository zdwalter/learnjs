//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/TextboxSelectExample.htm
//Textbox Select Example
EventUtil.addHandler(window, "load", function(event){
    var textbox = document.forms[0].elements[0];
    
    EventUtil.addHandler(textbox, "focus", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        target.select();
    });

    textbox.focus();
});               

    
    