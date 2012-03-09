//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample3.htm
//Prototype Pattern Example 3
    
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    print(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = "Greg";
print(person1.name);   //"Greg" – from instance
print(person2.name);   //"Nicholas" – from prototype

delete person1.name;
print(person1.name);   //"Nicholas" - from the prototype

    