//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DFillRectGradientExample01.htm
//Canvas Fill Rect Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d"),
            gradient = context.createLinearGradient(30, 30, 70, 70);
    
    
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");
    
        //draw a red rectangle
        context.fillStyle = "#ff0000";
        context.fillRect(10, 10, 50, 50);
    
        //draw a gradient rectangle
        context.fillStyle = gradient;
        context.fillRect(30, 30, 50, 50);
    }                
};

    