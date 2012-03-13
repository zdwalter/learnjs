//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypalInheritanceExample02.htm
//Prototypal Inheritance Example
                    
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

print(person.friends);   //"Shelby,Court,Van,Rob,Barbie"

       

    