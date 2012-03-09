//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/CanvasTransformExample.htm
//Canvas Transform Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var context = drawing.getContext("2d");
        
        //start the path
        context.beginPath();
        
        //draw outer circle
        context.arc(100, 100, 99, 0, 2 * Math.PI, false);
        
        //draw inner circle
        context.moveTo(194, 100);
        context.arc(100, 100, 94, 0, 2 * Math.PI, false);

        //move center to (100,100)
        context.translate(100, 100);
        context.rotate(1);
        
        //draw hour hand
        context.moveTo(0,0);
        context.lineTo(0, -85);
        
        //draw minute hand
        context.moveTo(0, 0);
        context.lineTo(-65, 0);
        
        context.stroke();

    }                
};

    