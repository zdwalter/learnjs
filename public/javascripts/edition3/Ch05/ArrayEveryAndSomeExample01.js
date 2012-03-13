//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/ArrayEveryAndSomeExample01.htm
//Array every() and some() Example
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
});

print(everyResult);       //false

var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});

print(someResult);       //true


    