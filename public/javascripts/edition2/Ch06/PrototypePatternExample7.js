//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample7.htm
//Prototype Pattern Example 5
    
function Person(){
}

Person.prototype = {
    name : "Nicholas",
    age : 29,
    job: "Software Engineer",
    sayName : function () {
        print(this.name);
    }
};

var person = new Person();

print(person instanceof Object);  //true
print(person instanceof Person);  //true
print(person.constructor == Person);  //false
print(person.constructor == Object);  //true

    