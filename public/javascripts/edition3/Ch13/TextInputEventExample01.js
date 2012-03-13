//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/TextInputEventExample01.htm
//TextInput Event Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "textInput", function(event){
    event = EventUtil.getEvent(event);
    print(event.data);     
});
    