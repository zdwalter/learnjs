//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/2DDataUrlExample01.htm
//Canvas Fill Rect Example
window.onload = function(){
    var drawing = document.getElementById("drawing"),
        btn     = document.getElementById("export-btn");
    
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
    
    btn.onclick = function(){
        //get data URI of the image
        var imgURI = drawing.toDataURL();
        
        //display the image
        var image = document.createElement("img");
        image.src = imgURI;
        document.body.appendChild(image);    

    };
};

    