//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/MathObjectRandomExample3.htm
//Math Object Random Example 3
    
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2, 10);
print(num);   //number between 2 and 10 (inclusive)

var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length-1)];
print(color);  //any of the strings in the array

    