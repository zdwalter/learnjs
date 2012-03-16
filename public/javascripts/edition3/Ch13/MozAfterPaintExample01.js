//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/MozAfterPaintExample01.htm
//MozAfterPaint Example
    EventUtil.addHandler(document.getElementById("myDiv"), "click", function(event){
var target = EventUtil.getTarget(event);
target.style.backgroundColor = (target.style.backgroundColor == "silver") ? "blue" : "silver";

//modification of http://ejohn.org/apps/paint/track.js
EventUtil.addHandler(window, "MozAfterPaint", function(event){

    EventUtil.removeHandler(window, "MozAfterPaint", arguments.callee);
    
    var i=0, len=event.clientRects.length,
        div,
        clientRect;
        
    while(i < len){
        clientRect = event.clientRects[i++];
        div = document.createElement("div");
        div.style.position = "absolute";
        div.style.opacity = 0.1;
        div.style.background = "red";
        div.style.left = clientRect.left + "px";
        div.style.top = clientRect.top + "px";
        div.style.width = (clientRect.right-clientRect.left) + "px";
        div.style.height = (clientRect.bottom-clientRect.top) + "px";
        document.body.appendChild(div);
    }

    
});

    });
    


    