//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample04.htm
//Prototype Pattern Example 4
    
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

print(person1.hasOwnProperty("name"));  //false
print("name" in person1);  //true

person1.name = "Greg";
print(person1.name);   //"Greg" – from instance
print(person1.hasOwnProperty("name"));  //true
print("name" in person1);  //true

print(person2.name);   //"Nicholas" – from prototype
print(person2.hasOwnProperty("name"));  //false
print("name" in person2);  //true

delete person1.name;
print(person1.name);   //"Nicholas" - from the prototype
print(person1.hasOwnProperty("name"));  //false
print("name" in person1);  //true

    