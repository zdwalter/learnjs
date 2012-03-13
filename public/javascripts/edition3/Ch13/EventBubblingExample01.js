//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/EventBubblingExample01.htm
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
    

    