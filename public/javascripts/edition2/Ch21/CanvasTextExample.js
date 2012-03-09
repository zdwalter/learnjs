//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/CanvasTextExample.htm
//Canvas Text Example
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
        
        //draw hour hand
        context.moveTo(100,100);
        context.lineTo(100, 15);
        
        //draw minute hand
        context.moveTo(100, 100);
        context.lineTo(35, 100);
        
        context.stroke();
        
        //add some text - not supported by all browsers
        context.font = "bold 10px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.strokeText("12", 100, 80);
    }                
};

    