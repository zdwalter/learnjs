//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypeChainingExample01.htm
//Prototype Chaining Example
            
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function (){
    return this.subproperty;
};

var instance = new SubType();
print(instance.getSuperValue());   //true
       
print(instance instanceof Object);      //true
print(instance instanceof SuperType);   //true
print(instance instanceof SubType);     //true

print(Object.prototype.isPrototypeOf(instance));    //true
print(SuperType.prototype.isPrototypeOf(instance)); //true
print(SubType.prototype.isPrototypeOf(instance));   //true


    