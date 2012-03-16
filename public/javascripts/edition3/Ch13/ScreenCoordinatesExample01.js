//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/ScreenCoordinatesExample01.htm
//Screen Coordinates Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
    event = EventUtil.getEvent(event);
    print("Screen coordinates: " + event.screenX + "," + event.screenY);        
});
    