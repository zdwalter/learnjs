//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch17/XHRTimeoutExample.htm
//XHR Timeout Example
    
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
xhr.onreadystatechange = function(event){
    try {
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                print(xhr.responseText);
            } else {
                print("Request was unsuccessful: " + xhr.status);
            }
        }
    } catch (ex){
        //assume handled by ontimeout
    }
};

xhr.open("get", "timeout.php", true);
xhr.timeout = 1000;
xhr.ontimeout = function(){
    print("Request did not return in a second.");
};        
xhr.send(null);

    