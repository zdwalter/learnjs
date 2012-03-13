//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/FileAPIExample05.htm
//File API Example
window.onload = function(){

    var droptarget = document.getElementById("droptarget");
    
    function handleEvent(event){
        var info = "",
            output = document.getElementById("output"),
            files, i, len;            
    
        EventUtil.preventDefault(event);
        
        if (event.type == "drop"){
            files = event.dataTransfer.files;
            i = 0;
            len = files.length;
        
            while (i < len){
                info += files[i].name + " (" + files[i].type + ", " + files[i].size + " bytes)<br>";
                i++;
            }
            
            output.innerHTML = info;
        }
    }

    EventUtil.addHandler(droptarget, "dragenter", handleEvent);
    EventUtil.addHandler(droptarget, "dragover", handleEvent);
    EventUtil.addHandler(droptarget, "drop", handleEvent);        

};

    