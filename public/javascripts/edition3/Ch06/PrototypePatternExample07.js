//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample07.htm
//Prototype Pattern Example
    
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

var friend = new Person();

print(friend instanceof Object);  //true
print(friend instanceof Person);  //true
print(friend.constructor == Person);  //false
print(friend.constructor == Object);  //true

    