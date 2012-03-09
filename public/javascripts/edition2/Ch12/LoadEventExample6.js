//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/LoadEventExample6.htm
//Load Event Example
EventUtil.addHandler(window, "load", function(){
    var image = new Image();
    EventUtil.addHandler(image, "load", function(event){
        print("Image loaded!");
    });
    image.src = "smile.gif";            
});
    