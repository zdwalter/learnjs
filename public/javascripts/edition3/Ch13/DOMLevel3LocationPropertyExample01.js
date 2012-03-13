//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMLevel3LocationPropertyExample01.htm
//DOM Level 3 Location Property Example
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event){
    event = EventUtil.getEvent(event);

    var loc = event.location || event.keyLocation;
    if (loc){
        print(loc);    
    } 
   
});
    