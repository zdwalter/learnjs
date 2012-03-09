//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/ScopeSafeConstructorsExample2.htm
//Scope-Safe Constructors Example
    
function Person(name, age, job){
    if (this instanceof Person){
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}

var person1 = Person("Nicholas", 29, "Software Engineer");
print(window.name);   //""
print(person1.name);  //"Nicholas"

var person2 = new Person("Shelby", 34, "Ergonomist");
print(person2.name);  //"Shelby"


    