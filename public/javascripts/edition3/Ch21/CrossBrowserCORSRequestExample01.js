//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/CrossBrowserCORSRequestExample01.htm
//Cross-Browser CORS Request Example
    
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", "http://www.somewhere-else.com/xdr.php");
if (request){
    request.onload = function(){
        //do something with request.responseText
    };
    request.send();
}
 

    