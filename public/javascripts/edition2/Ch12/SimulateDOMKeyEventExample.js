//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/SimulateDOMKeyEventExample.htm
//Simulating DOM Keyboard Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var textbox = document.getElementById("myTextbox");

EventUtil.addHandler(textbox, "keypress", function(event){
    print(event.charCode);
});

EventUtil.addHandler(btn, "click", function(event){

    //create event object
    var event;
    
    try {
        event = document.createEvent("KeyboardEvent");
        event.initKeyboardEvent("keypress", true, true, "Shift", 0, "");
 
    } catch (ex){
        event = document.createEvent("Events");
        event.initEvent("keypress", true, true);
        event.view = document.defaultView;
        event.altKey = false;
        event.ctrlKey = false;
        event.shiftKey = false;
        event.metaKey = false;
        event.keyCode = 65;
        event.charCode = 65;            
    }            
    
    //fire the event
    textbox.dispatchEvent(event);

});

    })();
    