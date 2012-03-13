//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/XHRErrorEventExample01.htm
//XHR Error Event Example
    
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"];
    
            for (var i=0,len=versions.length; i < len; i++){
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
        
var xhr = createXHR();        
xhr.onload = function(event){
    if ((xhr.status >= 200 && xhr.status < 300) || 
            xhr.status == 304){
        print(xhr.responseText);
    } else {
        print("Request was unsuccessful: " + xhr.status);
    }
};
xhr.onerror = function(event){
    print("Error!");
};

xhr.open("get", "altevents.php", true);

xhr.send(null);

    