//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample02.htm
//Prototype Pattern Example 2
    
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

    