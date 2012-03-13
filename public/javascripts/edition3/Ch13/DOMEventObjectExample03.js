//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMEventObjectExample03.htm
//DOM Event Object Example
var btn = document.getElementById("myBtn");
var handler = function(event){
    switch(event.type){
        case "click":
            print("Clicked");
            break;
            
        case "mouseover":
            event.target.style.backgroundColor = "red";
            break;
            
        case "mouseout":
            event.target.style.backgroundColor = "";
            break;                        
    }
};

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;
    
    