//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/SubtractExample01.htm
//Subtract Example 1
    
var result1 = 5 - true;    //4 because true is converted to 1
var result2 = NaN - 1;     //NaN
var result3 = 5 - 3;       //2
var result4 = 5 - "";      //5 because "" is converted to 0
var result5 = 5 - "2";     //3 because "2" is converted to 2
var result6 = 5 - null;    //5 because null is converted to 0

print(result1);
print(result2);
print(result3);
print(result4);
print(result5);
print(result6);

    