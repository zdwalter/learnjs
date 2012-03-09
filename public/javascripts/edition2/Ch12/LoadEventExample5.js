//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/LoadEventExample5.htm
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
    