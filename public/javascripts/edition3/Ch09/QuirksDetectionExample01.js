//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch09/QuirksDetectionExample01.htm
//Quirks Detection Example
    
var hasDontEnumQuirk = function(){

    var o = { toString : function(){} };
    for (var prop in o){
        if (prop == "toString"){
            return false;
        }
    }

    return true;
}();

var hasEnumShadowsQuirk = function(){

    var o = { toString : function(){} };
    var count = 0;
    for (var prop in o){
        if (prop == "toString"){
            count++;
        }
    }

    return (count > 1);
}();

print(hasDontEnumQuirk);
print(hasEnumShadowsQuirk);
    