//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/OnErrorExample2.htm
//OnError Example
EventUtil.addHandler(window, "load", function(){
    var image = new Image();
    EventUtil.addHandler(image, "load", function(event){
        print("Image loaded!");
    });
    EventUtil.addHandler(image, "error", function(event){
        print("Image not loaded!");
    });
    image.src = "smilex.gif";  //doesn't exist          
});
    