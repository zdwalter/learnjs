//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/FrozenObjectsExample02.htm
//Frozen Objects Example
var person = { name: "Nicholas" };
print(Object.isExtensible(person));   //true
print(Object.isSealed(person));       //false
print(Object.isFrozen(person));       //false

Object.freeze(person);
print(Object.isExtensible(person));   //false
print(Object.isSealed(person));       //true
print(Object.isFrozen(person));       //true

person.age = 29;
print(person.age);
    