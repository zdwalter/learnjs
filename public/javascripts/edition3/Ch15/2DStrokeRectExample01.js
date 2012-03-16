//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DStrokeRectExample01.htm
//Canvas Stroke Rect Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");
    
        //draw a red rectangle
        context.strokeStyle = "#ff0000";
        context.strokeRect(10, 10, 50, 50);
    
        //draw a blue rectangle that's semi-transparent
        context.strokeStyle = "rgba(0,0,255,0.5)";
        context.strokeRect(30, 30, 50, 50);
    }                
};

    