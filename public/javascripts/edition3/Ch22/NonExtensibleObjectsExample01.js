//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/NonExtensibleObjectsExample01.htm
//Non-Extensible Objects Example
var person = { name: "Nicholas" };
Object.preventExtensions(person);

person.age = 29;
print(person.age);
    