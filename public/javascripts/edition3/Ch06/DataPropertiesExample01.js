//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/DataPropertiesExample01.htm
//Data Properties Example

var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

print(person.name);
person.name = "Michael";
print(person.name);


    