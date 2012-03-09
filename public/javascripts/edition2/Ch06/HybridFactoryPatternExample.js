//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/HybridFactoryPatternExample.htm
//Hybrid Factory Pattern Example
            
function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        print(this.name);
    };    
    return o;
}

var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();  //"Nicholas"



    