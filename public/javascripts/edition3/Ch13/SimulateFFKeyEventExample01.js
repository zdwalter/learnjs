//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/SimulateFFKeyEventExample01.htm
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
    event.initKeyEvent("keydown", true, true, document.defaultView, false, false, 
                       true, false, 65, 65);
    
    //fire the event
    textbox.dispatchEvent(event);

});

    })();
    