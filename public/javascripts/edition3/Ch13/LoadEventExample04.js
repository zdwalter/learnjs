//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/LoadEventExample04.htm
//Load Event Example
var image = document.getElementById("myImage");
EventUtil.addHandler(image, "load", function(event){
    event = EventUtil.getEvent(event);
    print(EventUtil.getTarget(event).src);
});
    