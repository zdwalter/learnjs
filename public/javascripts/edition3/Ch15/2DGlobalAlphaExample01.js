//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DGlobalAlphaExample01.htm
//Canvas Global Alpha Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");         
    
        //draw a red rectangle
        context.fillStyle = "#ff0000";
        context.fillRect(10, 10, 50, 50);
        
        context.globalAlpha = 0.5;
    
        //draw a blue rectangle
        context.fillStyle = "rgba(0,0,255,1)";
        context.fillRect(30, 30, 50, 50);
    }                
};

    