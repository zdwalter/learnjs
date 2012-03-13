//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/NonExtensibleObjectsExample02.htm
//Non-Extensible Objects Example
var person = { name: "Nicholas" };
print(Object.isExtensible(person));   //true

Object.preventExtensions(person);
print(Object.isExtensible(person));   //false

person.age = 29;
print(person.age);
    