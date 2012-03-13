//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/ArrayFilterExample01.htm
//Array indexOf() Example
var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});

print(filterResult);   //[3,4,5,4,3]

    