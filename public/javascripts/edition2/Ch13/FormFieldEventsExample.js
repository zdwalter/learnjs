//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch13/FormFieldEventsExample.htm
//Form Field Events Example
EventUtil.addHandler(window, "load", function(event){
    var textbox = document.forms[0].elements[0];
    
    EventUtil.addHandler(textbox, "focus", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        target.style.backgroundColor = "yellow";
    });

    EventUtil.addHandler(textbox, "blur", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (/[^\d]/.test(target.value)){
            target.style.backgroundColor = "red";
        } else {
            target.style.backgroundColor = "";
        }
    });

    EventUtil.addHandler(textbox, "change", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (/[^\d]/.test(target.value)){
            target.style.backgroundColor = "red";
        } else {
            target.style.backgroundColor = "";
        }
    });

    textbox.focus();
});               

    
    