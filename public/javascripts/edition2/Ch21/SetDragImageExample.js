//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/SetDragImageExample.htm
//setDragImage() Example
var droptarget = document.getElementById("droptarget");
var dragme = document.getElementById("dragme");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br />";
    switch(event.type){
        case "dragstart":
        case "draggesture":
            //event.dataTransfer.setDragImage(dragme, 25, 25);
            break;
        case "dropenter":
        case "dragover":
            EventUtil.preventDefault(event);
            event.dataTransfer.effectAllowed = "link";
            print(event.dataTransfer.clearData);
            break;
        case "drop":
        case "dragdrop":
            droptarget.innerHTML = event.dataTransfer.getData("url");
    }

}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

EventUtil.addHandler(dragme, "dragstart", handleEvent);

//Firefox 3
EventUtil.addHandler(droptarget, "dragdrop", handleEvent);
EventUtil.addHandler(droptarget, "dragexit", handleEvent);
EventUtil.addHandler(dragme, "draggesture", handleEvent);

    