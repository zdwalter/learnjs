//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/DropEffectAndEffectAllowedExample01.htm
//dropEffect and effectAllowed Example
var droptarget = document.getElementById("droptarget");
var link = document.links[0];

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br>";
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
            droptarget.innerHTML = event.dataTransfer.getData("url") || event.dataTransfer.getData("text/uri-list");
    }

}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

EventUtil.addHandler(link, "dragstart", handleEvent);


    