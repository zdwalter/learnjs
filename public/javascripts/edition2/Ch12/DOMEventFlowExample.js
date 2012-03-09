//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMEventFlowExample.htm
//DOM Event Flow Example
    
window.onload = function(){
    window.addEventListener("click", function(){
        print("Window (capture)");
    }, true);
    window.addEventListener("click", function(e){
        print("Window (bubble)");
    }, false);
    
    document.addEventListener("click", function(){
        print("Document (capture)");
    }, true);
    document.addEventListener("click", function(){
        print("Document (bubble)");
    }, false);
    
    document.getElementsByTagName("html")[0].addEventListener("click", function(){
        print("Html (capture)");
    }, true);
    document.getElementsByTagName("html")[0].addEventListener("click", function(){
        print("Html (bubble)");
    }, false);
    
    document.body.addEventListener("click", function(){
        print("Body (capture)");
    }, true);
    document.body.addEventListener("click", function(){
        print("Body (bubble)");
    }, false);
    
    document.getElementById("myDiv").addEventListener("click", function(){
        print("Div (capture)");
    }, true);
    document.getElementById("myDiv").addEventListener("click", function(e){
        print("Div (bubble)");
    }, false);

}
    

    