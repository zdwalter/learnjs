//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/ArrayComprehensionsExample.htm
//Array Comprehensions Example

//original array
var numbers = [0,1,2,3,4,5,6,7,8,9,10];

//just copy all items into a new array
var duplicate = [i for each (i in numbers)];

//get just the even numbers
var evens = [i for each (i in numbers) if (i % 2 == 0)];

//multiply every value by 2
var doubled = [i*2 for each (i in numbers)];

//multiply every odd number by 3
var tripledOdds = [i*3 for each (i in numbers) if (i % 2 > 0)];      

print(duplicate);
print(evens);
print(doubled);
print(tripledOdds);

    