//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/ParasiticCombinationInheritanceExample.htm
//Parasitic Combination Inheritance Example
    
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
    
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);   //create object
    prototype.constructor = subType;               //augment object
    subType.prototype = prototype;                 //assign object
}
                        
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
    print(this.name);
};

function SubType(name, age){  
    SuperType.call(this, name);
    
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    print(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
print(instance1.colors);  //"red,blue,green,black"
instance1.sayName();      //"Nicholas";
instance1.sayAge();       //29

       
var instance2 = new SubType("Greg", 27);
print(instance2.colors);  //"red,blue,green"
instance2.sayName();      //"Greg";
instance2.sayAge();       //27
       

    