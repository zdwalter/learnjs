//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/SealedObjectsExample01.htm
//Sealed Objects Example
var person = { name: "Nicholas" };
Object.seal(person);

person.age = 29;
print(person.age);      //undefined

delete person.name;
print(person.name);     //"Nicholas"
    