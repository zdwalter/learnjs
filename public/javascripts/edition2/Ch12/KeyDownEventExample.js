//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/KeyDownEventExample.htm
//Keydown Event Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "textInput", function(event){
    event = EventUtil.getEvent(event);
    print(event.data);     
});
    