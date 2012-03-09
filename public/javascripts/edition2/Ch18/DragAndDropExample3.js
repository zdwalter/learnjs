//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/DragAndDropExample3.htm
//Drag and Drop Example
    
var DragDrop = function(){

    var dragging = null;
    var diffX = 0;
    var diffY = 0;
    
    function handleEvent(event){
    
        //get event and target
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);            
    
        //determine the type of event
        switch(event.type){
            case "mousedown":
                if (target.className.indexOf("draggable") > -1){
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                }                     
                break;
                
            case "mousemove":
                if (dragging !== null){
                
                    //get event
                    event = EventUtil.getEvent(event);
                    
                    //assign location
                    dragging.style.left = (event.clientX - diffX) + "px";
                    dragging.style.top = (event.clientY - diffY) + "px";                    
                }                    
                break;
                
            case "mouseup":
                dragging = null;
                break;
        }
    };
    
    //public interface
    return {            
        enable: function(){
            EventUtil.addHandler(document, "mousedown", handleEvent);
            EventUtil.addHandler(document, "mousemove", handleEvent);
            EventUtil.addHandler(document, "mouseup", handleEvent);
        },
        
        disable: function(){
            EventUtil.removeHandler(document, "mousedown", handleEvent);
            EventUtil.removeHandler(document, "mousemove", handleEvent);
            EventUtil.removeHandler(document, "mouseup", handleEvent);
        }
    }
}();

DragDrop.enable();
                


    