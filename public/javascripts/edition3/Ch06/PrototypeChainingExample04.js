//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypeChainingExample04.htm
//Prototype Chaining Example 4
            
function SuperType(){
    this.colors = ["red", "blue", "green"];
}

function SubType(){            
}

//inherit from SuperType
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
print(instance1.colors);    //"red,blue,green,black"

var instance2 = new SubType();
print(instance2.colors);    //"red,blue,green,black"


    