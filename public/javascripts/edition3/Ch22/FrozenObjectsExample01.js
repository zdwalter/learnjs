//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/FrozenObjectsExample01.htm
//Frozen Objects Example
var person = { name: "Nicholas" };
Object.freeze(person);

person.age = 29;
print(person.age);      //undefined

delete person.name;
print(person.name);     //"Nicholas"

person.name = "Greg";
print(person.name);     //"Nicholas"
    