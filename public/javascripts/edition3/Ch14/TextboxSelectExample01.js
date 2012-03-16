//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/TextboxSelectExample01.htm
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

    
    