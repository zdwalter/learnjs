//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/LongURLErrorExample.htm
//Long URL Error Example (IE-only)
function createLongUrl(url){
    var s = "?";
    for (var i=0, len=2500; i < len; i++){
        s += "a";
    }
    
    return url + s;
}
       
var x = new XMLHttpRequest();
x.open("get", createLongUrl("http://www.somedomain.com/"), true);
x.send(null);
    