//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/ArrayReductionExample01.htm
//Array Reduction Example

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
print(sum);


    