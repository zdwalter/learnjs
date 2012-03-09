//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/KeyPressEventExample.htm
//Keypress Event Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keypress", function(event){
    event = EventUtil.getEvent(event);
    print(EventUtil.getCharCode(event));     
});
    