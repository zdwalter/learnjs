//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypalInheritanceExample03.htm
//Prototypal Inheritance Example
                    
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
                   
var anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
});

print(anotherPerson.name);  //"Greg"


       

    