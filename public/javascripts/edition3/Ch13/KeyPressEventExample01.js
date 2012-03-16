//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/KeyPressEventExample01.htm
//Keypress Event Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keypress", function(event){
    event = EventUtil.getEvent(event);
    print(EventUtil.getCharCode(event));     
});
    