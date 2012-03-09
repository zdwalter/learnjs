//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypalInheritanceExample.htm
//Prototypal Inheritance Example
            
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

print(person.friends);   //"Shelby,Court,Van,Rob,Barbie"

       

    