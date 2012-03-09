//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/ConstructorPatternExample3.htm
//Constructor Pattern Example 3
    
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName(){
    print(this.name);
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.sayName();   //"Nicholas"
person2.sayName();   //"Greg"

print(person1 instanceof Object);  //true
print(person1 instanceof Person);  //true
print(person2 instanceof Object);  //true
print(person2 instanceof Person);  //true

print(person1.constructor == Person);  //true
print(person2.constructor == Person);  //true

print(person1.sayName == person2.sayName);  //true        


    