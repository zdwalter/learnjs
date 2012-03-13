//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/EventCapturingExample01.htm
//Event Capturing Example
    
window.onload = function(){
    window.addEventListener("click", function(){
        print("Window");
    }, true);
    
    document.addEventListener("click", function(){
        print("Document");
    }, true);
    
    document.documentElement.addEventListener("click", function(){
        print("Html");
    }, true);
    
    document.body.addEventListener("click", function(){
        print("Body");
    }, true);
    document.getElementById("myDiv").addEventListener("click", function(){
        print("Div");
    }, true);
}
    

    