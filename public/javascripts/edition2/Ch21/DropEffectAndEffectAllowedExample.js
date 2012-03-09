//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/DropEffectAndEffectAllowedExample.htm
//dropEffect and effectAllowed Example
var droptarget = document.getElementById("droptarget");
var link = document.links[0];

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br />";
    switch(event.type){
        case "dragstart":
        case "draggesture":
            event.dataTransfer.dropEffect = "link";
            break;
        case "dropenter":
        case "dragover":
            EventUtil.preventDefault(event);
            event.dataTransfer.effectAllowed = "link";
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

EventUtil.addHandler(link, "dragstart", handleEvent);

//Firefox 3
EventUtil.addHandler(droptarget, "dragdrop", handleEvent);
EventUtil.addHandler(droptarget, "dragexit", handleEvent);
EventUtil.addHandler(link, "draggesture", handleEvent);

    