//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/FileAPIExample02.htm
//File API Example
window.onload = function(){
    
    var filesList = document.getElementById("files-list");
    EventUtil.addHandler(filesList, "change", function(event){
        var info = "",
            output = document.getElementById("output"),
            progress = document.getElementById("progress"),
            files = EventUtil.getTarget(event).files,
            type = "default",
            reader = new FileReader();
            
        if (/image/.test(files[0].type)){
            reader.readAsDataURL(files[0]);
            type = "image";
        } else {
            reader.readAsText(files[0]);
            type = "text";
        }
            
        reader.onerror = function(){
            output.innerHTML = "Could not read file, error code is " + reader.error.code;
        };
        
        reader.onprogress = function(event){
            if (event.lengthComputable){
                progress.innerHTML = event.loaded + "/" + event.total;
            }
        };
        
        reader.onload = function(){
        
            var html = "";
            
            switch(type){
                case "image":
                    html = "<img src=\"" + reader.result + "\">";
                    break;
                case "text":
                    html = reader.result;
                    break;
                    
            }
            output.innerHTML = html;
        };
    });
};

    