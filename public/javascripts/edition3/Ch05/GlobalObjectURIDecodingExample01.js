//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/GlobalObjectURIDecodingExample01.htm
//Global Object URI Decoding Example
    
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
print(decodeURI(uri));

//http://www.wrox.com/illegal value.htm#start
print(decodeURIComponent(uri));

    