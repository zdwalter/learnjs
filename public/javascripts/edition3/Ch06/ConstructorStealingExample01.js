//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/ConstructorStealingExample01.htm
//Constructor Stealing Example
            
function SuperType(){
    this.colors = ["red", "blue", "green"];
}

function SubType(){  
    //inherit from SuperType
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
print(instance1.colors);    //"red,blue,green,black"

var instance2 = new SubType();
print(instance2.colors);    //"red,blue,green"


    