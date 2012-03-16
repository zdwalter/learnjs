//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/KeyboardEventsExample01.htm
//Keyboard Events Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
    event = EventUtil.getEvent(event);
    print(event.keyCode);     
});
    