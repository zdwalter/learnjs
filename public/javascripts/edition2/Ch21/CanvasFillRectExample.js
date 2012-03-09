//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/CanvasFillRectExample.htm
//Canvas Fill Rect Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");
    
        //draw a red rectangle
        context.fillStyle = "#ff0000";
        context.fillRect(10, 10, 50, 50);
    
        //draw a blue rectangle that's semi-transparent
        context.fillStyle = "rgba(0,0,255,0.5)";
        context.fillRect(30, 30, 50, 50);
    }                
};

    