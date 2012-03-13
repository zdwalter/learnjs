//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/SimulateIEClickExample01.htm
//Simulating IE Mouse Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

EventUtil.addHandler(btn, "click", function(event){
    print("Clicked!");
    print(event.screenX);   //100
});

EventUtil.addHandler(btn2, "click", function(event){
    //create event object
    var event = document.createEventObject();
    
    //initialize the event object
    event.view = window;
    event.detail = 0;
    event.screenX = 100;
    event.screenY = 0;
    event.clientX = 0;
    event.clientY = 0;
    event.ctrlKey = false;
    event.altKey = false;
    event.metaKey = false;
    event.shiftKey = false;
    event.button = 0;
    event.relatedTarget = null;
    
    //fire the event
    btn.fireEvent("onclick", event);

});

    })();
    