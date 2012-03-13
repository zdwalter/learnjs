//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/DragAndDropExample02.htm
//Drag and Drop Example
var droptarget = document.getElementById("droptarget");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br>";
}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

    