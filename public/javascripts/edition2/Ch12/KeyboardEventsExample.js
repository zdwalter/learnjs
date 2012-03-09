//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/KeyboardEventsExample.htm
//Keyboard Events Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
    event = EventUtil.getEvent(event);
    print(event.keyCode);     
});
    