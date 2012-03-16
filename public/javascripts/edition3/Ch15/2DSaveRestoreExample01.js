//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DSaveRestoreExample01.htm
//Canvas Save-Restore Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");
                        
        context.fillStyle = "#ff0000";
        context.save();
        
        context.fillStyle = "#00ff00";
        context.translate(100, 100);
        context.save();
        
        context.fillStyle = "#0000ff";
        context.fillRect(0, 0, 100, 200);   //draws blue rectangle at (100, 100)
        
        context.restore();
        context.fillRect(10, 10, 100, 200);   //draws green rectangle at (110, 110)
        
        context.restore();
        context.fillRect(0, 0, 100, 200);    //draws red rectangle at (0,0)


    }                
};

    