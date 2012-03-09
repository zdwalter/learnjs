//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/UnaryPlusMinusExample1.htm
//Unary Plus/Minus Example 1
  
var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = { 
    valueOf: function() {
        return -1;
    }
};

s1 = +s1;   //value becomes numeric 1
s2 = +s2;   //value becomes numeric 1.1
s3 = +s3;   //value becomes NaN
b = +b;     //value becomes numeric 0
f = +f;     //no change, still 1.1
o = +o;     //value becomes numeric –1

print(s1);
print(s2);
print(s3);
print(b);
print(f);
print(o);

    