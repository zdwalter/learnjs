//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/DestructuringAssignmentExample2.htm
//Destructuring Assignment Example

var person = {
    name: "Nicholas",
    age: 29
};

var { name: personName, age: personAge } = person;

print(personName);   //"Nicholas"
print(personAge);    //29

var { age: personAge2 } = person;

print(personAge2);    //29


    