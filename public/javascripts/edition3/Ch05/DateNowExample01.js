//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/DateNowExample01.htm
//Date Now Example
    
//Date.now() is in ECMAScript 5
//Prior to that, use +new Date()
    
var now = (typeof Date.now == "function" ? Date.now() : +new Date());
print("Right now: " + now);

    