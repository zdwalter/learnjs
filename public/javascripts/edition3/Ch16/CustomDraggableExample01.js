//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/CustomDraggableExample01.htm
//Custom Draggable Example
var droptarget = document.getElementById("droptarget");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br>";
    if (event.type == "dropenter" || event.type == "dragover" || event.type=="drop"){
        EventUtil.preventDefault(event);
    }
}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

window.onload = function(){

    var dragme = document.getElementById("dragme");
    
        //backwards compatibility with IE < 10
        if (!("draggable" in document.createElement("div")) && typeof dragme.dragDrop != "undefined"){
            dragme.onmousedown = function(){
                dragme.dragDrop();
            };
        }            
    
        EventUtil.addHandler(dragme, "dragstart", function(event){
            event.dataTransfer.setData("Text", "Foo");
        });
    
    
};

    