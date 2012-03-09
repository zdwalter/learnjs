//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample.htm
//Prototype Pattern Example
    
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    print(this.name);
};

var person1 = new Person();
person1.sayName();   //"Nicholas"

var person2 = new Person();
person2.sayName();   //"Nicholas"
      
print(person1.sayName == person2.sayName);  //true

print(Person.prototype.isPrototypeOf(person1));  //true
print(Person.prototype.isPrototypeOf(person2));  //true

    