//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/KeyUpEventExample01.htm
//Keyup Event Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
    event = EventUtil.getEvent(event);
    print(event.keyCode);     
});
    