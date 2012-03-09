//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/ArrayIndexOfExample.htm
//Array indexOf() Example
var numbers = [1,2,3,4,5,4,3,2,1];

print(numbers.indexOf(4));        //3
print(numbers.lastIndexOf(4));    //5

print(numbers.indexOf(4, 4));     //5
print(numbers.lastIndexOf(4, 4)); //3       

var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];

print(people.indexOf(person));     //-1
print(morePeople.indexOf(person)); //0

    