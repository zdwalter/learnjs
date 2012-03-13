//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DFillRectShadowExample01.htm
//Canvas Fill Rect Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");
    
        //setup shadow
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur    = 4;
        context.shadowColor   = "rgba(0, 0, 0, 0.5)";            
    
        //draw a red rectangle
        context.fillStyle = "#ff0000";
        context.fillRect(10, 10, 50, 50);
    
        //draw a blue rectangle
        context.fillStyle = "rgba(0,0,255,1)";
        context.fillRect(30, 30, 50, 50);
    }                
};

    