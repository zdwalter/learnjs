//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/ScopeSafeConstructorsExample.htm
//Scope-Safe Constructors Example
    
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
print(person1.name);     //"Nicholas"
print(person1.age);      //29
print(person1.job);      //"Software Engineer"

var person2 = Person("Nicholas", 29, "Software Engineer");
print(person2);         //undefined
print(window.name);     //"Nicholas"
print(window.age);      //29
print(window.job);      //"Software Engineer"

    