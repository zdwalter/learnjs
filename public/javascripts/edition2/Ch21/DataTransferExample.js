//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/DataTransferExample.htm
//Data Transfer Example
var droptarget = document.getElementById("droptarget");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br />";
    switch(event.type){
        case "dropenter":
        case "dragover":
            EventUtil.preventDefault(event);
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

//Firefox 3
EventUtil.addHandler(droptarget, "dragdrop", handleEvent);
EventUtil.addHandler(droptarget, "dragexit", handleEvent);

    