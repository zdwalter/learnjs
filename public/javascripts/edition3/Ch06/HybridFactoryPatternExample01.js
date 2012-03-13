//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/HybridFactoryPatternExample01.htm
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

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();  //"Nicholas"



    