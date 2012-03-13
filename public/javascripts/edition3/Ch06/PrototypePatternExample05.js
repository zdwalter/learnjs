//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample05.htm
//Prototype Pattern Example
    
function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}
    
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    print(this.name);
};

var person = new Person();        
print(hasPrototypeProperty(person, "name"));  //true

person.name = "Greg";
print(hasPrototypeProperty(person, "name"));  //false        

    