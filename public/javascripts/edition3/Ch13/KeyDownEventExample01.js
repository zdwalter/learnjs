//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/KeyDownEventExample01.htm
//Keydown Event Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keydown", function(event){
    event = EventUtil.getEvent(event);
    print(event.keyCode);     
});
    