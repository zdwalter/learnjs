//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample12.htm
//Prototype Pattern Example 10
            
function Person(){
}

Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    friends : ["Shelby", "Court"],
    sayName : function () {
        print(this.name);
    }
};

var person1 = new Person();
var person2 = new Person();

person1.friends.push("Van");

print(person1.friends);    //"Shelby,Court,Van"
print(person2.friends);    //"Shelby,Court,Van"
print(person1.friends === person2.friends);  //true


    