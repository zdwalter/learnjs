//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/GlobalObjectURIDecodingExample.htm
//Global Object URI Decoding Example
    
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
print(decodeURI(uri));

//http://www.wrox.com/illegal value.htm#start
print(decodeURIComponent(uri));

    