//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/SimulateIEKeyEventExample.htm
//Simulating IE Keyboard Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var textbox = document.getElementById("myTextbox");

EventUtil.addHandler(textbox, "keypress", function(event){
    event = EventUtil.getEvent(event);
    var charCode = EventUtil.getCharCode(event);
    print(charCode);
});

EventUtil.addHandler(btn, "click", function(event){

    //create event object
    var event = document.createEventObject();
    
    //initialize the event object
    event.altKey = false;
    event.ctrlKey = false;
    event.shiftKey = false;
    event.keyCode = 65;
    
    //fire the event
    textbox.fireEvent("onkeypress", event);

});

    })();
    