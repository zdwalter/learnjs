//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMLevel3LocationGetModifierStateExample01.htm
//DOM Level 3 getModifierState() Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
    event = EventUtil.getEvent(event);

    if (event.getModifierState){
        print(event.getModifierState("Shift"));    
    }    
});
    