//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DDrawImageExample01.htm
//Canvas Draw Image Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");
        var image = document.getElementById("smiley");
        
        //draw regular size
        context.drawImage(image, 10, 10);
        
        //draw smaller
        context.drawImage(image, 50, 10, 20, 30);

        //draw just part of the image
        context.drawImage(image, 0, 10, 50, 50, 0, 100, 40, 60);

    }                
};

    