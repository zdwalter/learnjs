//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/ScopeSafeConstructorsExample02.htm
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


    