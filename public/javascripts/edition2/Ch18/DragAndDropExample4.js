//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/DragAndDropExample4.htm
//Drag and Drop Example

var DragDrop = function(){

    var dragdrop = new EventTarget();
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
                    dragdrop.fire({type:"dragstart", target: dragging, x: event.clientX, y: event.clientY});
                }                     
                break;
                
            case "mousemove":
                if (dragging !== null){
                
                    //get event
                    event = EventUtil.getEvent(event);
                    
                    //assign location
                    dragging.style.left = (event.clientX - diffX) + "px";
                    dragging.style.top = (event.clientY - diffY) + "px";   

                    //fire custom event
                    dragdrop.fire({type:"drag", target: dragging, x: event.clientX, y: event.clientY});
                }                    
                break;
                
            case "mouseup":
                dragdrop.fire({type:"dragend", target: dragging, x: event.clientX, y: event.clientY});
                dragging = null;
                break;
        }
    };
    
    //public interface
    dragdrop.enable = function(){
            EventUtil.addHandler(document, "mousedown", handleEvent);
            EventUtil.addHandler(document, "mousemove", handleEvent);
            EventUtil.addHandler(document, "mouseup", handleEvent);
    };
        
    dragdrop.disable = function(){
            EventUtil.removeHandler(document, "mousedown", handleEvent);
            EventUtil.removeHandler(document, "mousemove", handleEvent);
            EventUtil.removeHandler(document, "mouseup", handleEvent);
    };
    
    return dragdrop;
}();

DragDrop.enable();
                
DragDrop.addHandler("dragstart", function(event){
    var status = document.getElementById("status");
    status.innerHTML = "Started dragging " + event.target.id;
});

DragDrop.addHandler("drag", function(event){
    var status = document.getElementById("status");
    status.innerHTML += "<br />Dragged " + event.target.id + " to (" + event.x + "," + event.y + ")";
});

DragDrop.addHandler("dragend", function(event){
    var status = document.getElementById("status");
    status.innerHTML += "<br />Dropped " + event.target.id + " at (" + event.x + "," + event.y + ")";
});

    