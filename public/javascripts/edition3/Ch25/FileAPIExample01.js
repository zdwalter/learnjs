//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/FileAPIExample01.htm
//File API Example
window.onload = function(){
    var filesList = document.getElementById("files-list");
    EventUtil.addHandler(filesList, "change", function(event){
        var info = "",
            output = document.getElementById("output"),
            files = EventUtil.getTarget(event).files,
            i = 0,
            len = files.length;
        
        while (i < len){
            info += files[i].name + " (" + files[i].type + ", " + files[i].size + " bytes)<br>";
            i++;
        }
        
        output.innerHTML = info;
    });
};

    