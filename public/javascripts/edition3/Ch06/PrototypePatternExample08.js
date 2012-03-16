//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample08.htm
//Prototype Pattern Example
    
function Person(){
}

Person.prototype = {
    constructor : Person,
    name : "Nicholas",
    age : 29,
    job: "Software Engineer",
    sayName : function () {
        print(this.name);
    }
};

var friend = new Person();

print(friend instanceof Object);  //true
print(friend instanceof Person);  //true
print(friend.constructor == Person);  //true
print(friend.constructor == Object);  //false

    