//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/LoadEventExample06.htm
//Load Event Example
EventUtil.addHandler(window, "load", function(){
    var image = new Image();
    EventUtil.addHandler(image, "load", function(event){
        print("Image loaded!");
    });
    image.src = "smile.gif";            
});
    