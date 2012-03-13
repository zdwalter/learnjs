//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch15/WebGLExample01.htm
//WebGL Example
window.onload = function(){
    var drawing = document.getElementById("drawing");
    
    //make sure <canvas> is completely supported
    if (drawing.getContext){
    
        var gl;
        
        
        try {
            gl = drawing.getContext("experimental-webgl");
        } catch (ex) {
            //noop
        }
        
        if (gl){
            gl.clearColor(0,0,0,1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        } else {
            print("WebGL context could not be created.");
        }
        
    }                
};

    