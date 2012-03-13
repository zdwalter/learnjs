//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch17/OnErrorExample01.htm
//OnError Example
window.onerror = function(message, url, line){
    print(message);
    return false;
};
throw new Error("Something bad happened.");
    