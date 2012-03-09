//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypeChainingExample2.htm
//Prototype Chaining Example 2
                    
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

//new method
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};

//override existing method
SubType.prototype.getSuperValue = function (){
    return false;
};

var instance = new SubType();
print(instance.getSuperValue());   //false


    