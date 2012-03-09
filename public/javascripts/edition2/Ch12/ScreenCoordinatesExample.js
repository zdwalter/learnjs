//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/ScreenCoordinatesExample.htm
//Screen Coordinates Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
    event = EventUtil.getEvent(event);
    print("Screen coordinates: " + event.screenX + "," + event.screenY);        
});
    