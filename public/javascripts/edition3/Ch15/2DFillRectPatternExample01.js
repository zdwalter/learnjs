//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DFillRectPatternExample01.htm
//Canvas Fill Rect Pattern Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d"),
            image = document.images[0],
            pattern = context.createPattern(image, "repeat");

        //draw a rectangle
        context.fillStyle = pattern;
        context.fillRect(10, 10, 150, 150);

    }                
};

    