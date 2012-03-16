//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/SimulateDOMClickExample01.htm
//Simulating DOM Mouse Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

EventUtil.addHandler(btn, "click", function(event){
    print("Clicked!");
    print(event.screenX);   //100
});

EventUtil.addHandler(btn2, "click", function(event){
    //create event object
    var event = document.createEvent("MouseEvents");
    
    //initialize the event object
    event.initMouseEvent("click", true, true, document.defaultView, 0, 100, 0, 0, 0, false, 
                         false, false, false, 0, btn2);
    
    //fire the event
    btn.dispatchEvent(event);

});

    })();
    