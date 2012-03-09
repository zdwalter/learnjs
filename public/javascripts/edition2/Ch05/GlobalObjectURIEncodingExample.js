//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/GlobalObjectURIEncodingExample.htm
//Global Object URI Encoding Example
    
var uri = "http://www.wrox.com/illegal value.htm#start";

//"http://www.wrox.com/illegal%20value.htm#start"
print(encodeURI(uri));

//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
print(encodeURIComponent(uri));



    