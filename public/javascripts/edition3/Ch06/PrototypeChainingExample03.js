//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypeChainingExample03.htm
//Prototype Chaining Example 3
                    
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

//try to add new methods – this nullifies the previous line
SubType.prototype = {
    getSubValue : function (){
        return this.subproperty;
    },

    someOtherMethod : function (){
        return false;
    }
};

var instance = new SubType();
print(instance.getSuperValue());   //error!



    