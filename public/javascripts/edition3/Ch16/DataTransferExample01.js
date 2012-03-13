//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/DataTransferExample01.htm
//Data Transfer Example
var droptarget = document.getElementById("droptarget");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br>";
    switch(event.type){
        case "drop":
        case "dragdrop":
            droptarget.innerHTML = event.dataTransfer.getData("url") || event.dataTransfer.getData("text/uri-list");
            /* falls through */

        case "dropenter":
        case "dragover":
            EventUtil.preventDefault(event);
            break;
    }

}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

    