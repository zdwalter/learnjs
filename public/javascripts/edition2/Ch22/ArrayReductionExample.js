//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/ArrayReductionExample.htm
//Array Reduction Example

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
print(sum);


    