//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/DataPropertiesExample03.htm
//Data Properties Example

var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});

//throws error
Object.defineProperty(person, "name", {
    configurable: true,
    value: "Nicholas"
});

    