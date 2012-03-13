//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/DataPropertiesExample02.htm
//Data Properties Example

var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});

print(person.name);
delete person.name;
print(person.name);

    