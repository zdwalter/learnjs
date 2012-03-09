//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/EventBubblingExample.htm
//Event Bubbling Example
    
window.onload = function(){
    window.onclick = function(){
        print("Window");
    };
    
    document.onclick = function(){
        print("Document");
    };
    
    document.documentElement.onclick = function(){
        print("Html");
    };
    
    document.body.onclick = function(){
        print("Body");
    };
    document.getElementById("myDiv").onclick = function(){
        print("Div");
    };
}
    

    