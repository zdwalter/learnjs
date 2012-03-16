//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample10.htm
//Prototype Pattern Example
            
function Person(){
}

var friend = new Person();
        
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        print(this.name);
    }
};

friend.sayName();   //error



    