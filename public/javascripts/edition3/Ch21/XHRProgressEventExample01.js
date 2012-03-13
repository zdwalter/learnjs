//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/XHRProgressEventExample01.htm
//XHR Progress Event Example
    
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"],
                i, len;
    
            for (i=0,len=versions.length; i < len; i++){
                try {
                    var xhr = new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    return xhr;
                } catch (ex){
                    //skip
                }
            }
        }
    
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}
        
window.onload = function(){
    var xhr = createXHR();        
    xhr.onload = function(event){
        if ((xhr.status >= 200 && xhr.status < 300) || 
                xhr.status == 304){
            print(xhr.responseText);
        } else {
            print("Request was unsuccessful: " + xhr.status);
        }
    };
    xhr.onprogress = function(event){
        var divStatus = document.getElementById("status");
        if (event.lengthComputable){
            divStatus.innerHTML = "Received " + event.position + " of " + event.totalSize + " bytes";
        }
    };
    xhr.open("get", "altevents.php", true);
    
    xhr.send(null);
};

    