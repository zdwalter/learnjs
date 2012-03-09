//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/DragAndDropExample.htm
//Drag and Drop Example
var image = document.getElementById("smiley");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br />";
}

EventUtil.addHandler(image, "dragstart", handleEvent);
EventUtil.addHandler(image, "drag", handleEvent);
EventUtil.addHandler(image, "dragend", handleEvent);

EventUtil.addHandler(image, "draggesture", handleEvent);

    