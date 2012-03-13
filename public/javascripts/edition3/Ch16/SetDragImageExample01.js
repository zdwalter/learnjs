//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/SetDragImageExample01.htm
//setDragImage() Example
var droptarget = document.getElementById("droptarget"),
    dragme = document.getElementById("dragme"),
    img = new Image();
img.src = "smile.gif";

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br>";
    switch(event.type){
        case "dragstart":
            event.dataTransfer.setData("Text", "Yippee!");
            event.dataTransfer.setDragImage(img, 25, 25);
            break;
        case "dropenter":
        case "dragover":
            EventUtil.preventDefault(event);
            break;
        case "drop":
        case "dragdrop":
            droptarget.innerHTML = event.dataTransfer.getData("Text");
            EventUtil.preventDefault(event);
    }

}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

EventUtil.addHandler(dragme, "dragstart", handleEvent);


    