//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/LoadEventExample05.htm
//Load Event Example
EventUtil.addHandler(window, "load", function(){
    var image = document.createElement("img");
    EventUtil.addHandler(image, "load", function(event){
        event = EventUtil.getEvent(event);
        print(EventUtil.getTarget(event).src);
    });
    document.body.appendChild(image);
    image.src = "smile.gif";            
});
    