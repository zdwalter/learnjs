//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch17/CommunicationErrorExample01.htm
//Communication Error Example
function addQueryStringArg(url, name, value){
    if (url.indexOf("?") == -1){
        url += "?";
    } else {
        url += "&";
    }
    
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

var url = "http://www.somedomain.com";
var newUrl = addQueryStringArg(url, "redir", "http://www.someotherdomain.com?a=b&c=d");
print(newUrl);
    