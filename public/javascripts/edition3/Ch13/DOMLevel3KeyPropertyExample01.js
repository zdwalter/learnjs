//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMLevel3KeyPropertyExample01.htm
//DOM Level 3 Key Property Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
    event = EventUtil.getEvent(event);

    var identifier = event.key || event.keyIdentifier;
    if (identifier){
        print(identifier);    
    }      
});
    