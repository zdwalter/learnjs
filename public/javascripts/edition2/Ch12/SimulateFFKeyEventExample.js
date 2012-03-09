//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/SimulateFFKeyEventExample.htm
//Simulating Firefox Keyboard Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var textbox = document.getElementById("myTextbox")

EventUtil.addHandler(btn, "keypress", function(event){
    print(event.charCode);
});

EventUtil.addHandler(btn, "click", function(event){
    //create event object
    var event = document.createEvent("KeyEvents");
    
    //initialize the event object
    event.initKeyEvent("keypress", true, true, document.defaultView, false, false, 
                       false, false, 65, 65);
    
    //fire the event
    textbox.dispatchEvent(event);

});

    })();
    