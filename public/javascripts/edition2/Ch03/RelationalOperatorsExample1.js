//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/RelationalOperatorsExample1.htm
//Relational Operators Example 1
    
var result1 = 5 > 3;    //true
var result2 = 5 < 3;    //false
var result3 = "Brick" < "alphabet";  //true
var result4 = "Brick".toLowerCase() < "alphabet".toLowerCase();  //false
var result5 = "23" < "3";  //true
var result6 = "23" < 3;    //false
var result7 = "a" < 3;    //false because "a" becomes NaN
var result8 = NaN < 3;    //false
var result9 = NaN >= 3;   //false

print(result1);
print(result2);
print(result3);
print(result4);
print(result5);
print(result6);
print(result7);
print(result8);
print(result9);

    