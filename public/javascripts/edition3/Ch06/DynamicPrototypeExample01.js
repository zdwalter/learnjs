//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/DynamicPrototypeExample01.htm
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

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();



    