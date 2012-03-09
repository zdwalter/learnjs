//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample10.htm
//Prototype Pattern Example 8
            
function Person(){
}

var person = new Person();
        
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        print(this.name);
    }
};

person.sayName();   //error



    