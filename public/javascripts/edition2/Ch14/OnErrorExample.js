//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/OnErrorExample.htm
//OnError Example
window.onerror = function(message, url, line){
    print(message);
    return false;
};
throw new Error("Something bad happened.");
    