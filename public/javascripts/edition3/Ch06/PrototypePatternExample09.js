//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample09.htm
//Prototype Pattern Example
            
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

var friend = new Person();

Person.prototype.sayHi = function(){
    print("hi");
};

friend.sayHi();   //"hi" – works!



    