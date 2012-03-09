//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/DynamicPrototypeExample.htm
//Dynamic Prototype Pattern Example
            
function Person(name, age, job){

    //properties
    this.name = name;
    this.age = age;
    this.job = job;
    
    //methods
    if (typeof this.sayName != "function"){
    
        Person.prototype.sayName = function(){
            print(this.name);
        };
        
    }
}

var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();



    