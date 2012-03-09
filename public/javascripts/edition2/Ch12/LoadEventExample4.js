//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/LoadEventExample4.htm
//Load Event Example
var image = document.getElementById("myImage");
EventUtil.addHandler(image, "load", function(event){
    event = EventUtil.getEvent(event);
    print(EventUtil.getTarget(event).src);
});
    