//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample9.htm
//Prototype Pattern Example 7
            
function Person(){
}

Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        print(this.name);
    }
};

var person = new Person();

Person.prototype.sayHi = function(){
    print("hi");
};

person.sayHi();   //"hi" – works!



    