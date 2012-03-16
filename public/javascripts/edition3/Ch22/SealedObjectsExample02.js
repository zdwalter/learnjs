//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/SealedObjectsExample02.htm
//Sealed Objects Example
var person = { name: "Nicholas" };
print(Object.isExtensible(person));   //true
print(Object.isSealed(person));       //false

Object.seal(person);
print(Object.isExtensible(person));   //false
print(Object.isSealed(person));       //true

person.age = 29;
print(person.age);
    