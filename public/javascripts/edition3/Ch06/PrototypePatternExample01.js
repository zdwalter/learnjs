//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample01.htm
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

//only works if Object.getPrototypeOf() is available
if (Object.getPrototypeOf){
    print(Object.getPrototypeOf(person1) == Person.prototype);  //true
    print(Object.getPrototypeOf(person1).name);  //"Nicholas"
}

    