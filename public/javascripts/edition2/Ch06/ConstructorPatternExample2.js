//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/ConstructorPatternExample2.htm
//Constructor Pattern Example 2
    
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        print(this.name);
    };
}

var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();   //"Nicholas"

Person("Greg", 27, "Doctor");  //adds to window
window.sayName();   //"Greg"

var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();    //"Kristen"

    