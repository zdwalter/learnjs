//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/SimulateDOMKeyEventExample01.htm
//Simulating DOM Keyboard Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var textbox = document.getElementById("myTextbox");

EventUtil.addHandler(textbox, "keydown", function(event){
    print(event.type);
    print(event.keyCode);
});

EventUtil.addHandler(btn, "click", function(event){

    //create event object
    var event;
    
    //DOM Level 3 implementation
    if (document.implementation.hasFeature("KeyboardEvent", "3.0")){
        event = document.createEvent("KeyboardEvent");
        event.initKeyboardEvent("keydown", true, true, "a", 0, "Shift");            
    } else {
        try {
            //Firefox implementation
            event = document.createEvent("KeyEvents");
            event.initKeyEvent("keydown", true, true, document.defaultView, false, false, 
                                true, false, 65, 65);    
        } catch (ex){ //others
            event = document.createEvent("Events");
            event.initEvent("keydown", true, true);
            event.view = document.defaultView;
            event.altKey = false;
            event.ctrlKey = false;
            event.shiftKey = false;
            event.metaKey = false;
            event.keyCode = 65;
            event.charCode = 65;            
        }               
        
        
    }
    
 
    
    //fire the event
    textbox.dispatchEvent(event);

});

    })();
    