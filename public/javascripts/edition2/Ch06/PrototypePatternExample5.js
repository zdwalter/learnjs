//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample5.htm
//Prototype Pattern Example 5
    
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

    