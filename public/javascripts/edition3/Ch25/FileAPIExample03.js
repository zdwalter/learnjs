//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/FileAPIExample03.htm
//File API Example
    
function blobSlice(blob, startByte, length){
    if (blob.slice){
        return blob.slice(startByte, length);
    } else if (blob.webkitSlice){
        return blob.webkitSlice(startByte, length);
    } else if (blob.mozSlice){
        return blob.mozSlice(startByte, length);
    } else {
        return null;
    }
}
    
window.onload = function(){
    
    var filesList = document.getElementById("files-list");
    EventUtil.addHandler(filesList, "change", function(event){
        var info = "",
            output = document.getElementById("output"),
            progress = document.getElementById("progress"),
            files = EventUtil.getTarget(event).files,
            reader = new FileReader(),
            blob = blobSlice(files[0], 0, 32);

        if (blob){
            reader.readAsText(blob);
            
            reader.onerror = function(){
                output.innerHTML = "Could not read file, error code is " + reader.error.code;
            };

            reader.onload = function(){
                output.innerHTML = reader.result;
            };
        } else {
            print("Your browser doesn't support slice().");
        }
    });
};

    