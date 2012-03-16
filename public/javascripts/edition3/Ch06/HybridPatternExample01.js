//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/HybridPatternExample01.htm
//Hybrid Pattern Example
            
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}

Person.prototype = {
    constructor: Person,
    sayName : function () {
        print(this.name);
    }
};

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("Van");

print(person1.friends);    //"Shelby,Court,Van"
print(person2.friends);    //"Shelby,Court"
print(person1.friends === person2.friends);  //false
print(person1.sayName === person2.sayName);  //true


    