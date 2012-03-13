//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/FileAPIExample04.htm
//File API Example
    
function createObjectURL(blob){
    if (window.URL){
        return window.URL.createObjectURL(blob);
    } else if (window.webkitURL){
        return window.webkitURL.createObjectURL(blob);
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
            url = createObjectURL(files[0]);

        if (url){
            if (/image/.test(files[0].type)){
                output.innerHTML = "<img src=\"" + url + "\">";
            } else {
                output.innerHTML = "Not an image.";
            }
        } else {
            output.innerHTML = "Your browser doesn't support object URLs.";
        }
    });
};

    