//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/ConstructorStealingExample02.htm
//Constructor Stealing Example
            
function SuperType(name){
    this.name = name;
}

function SubType(){  
    //inherit from SuperType passing in an argument
    SuperType.call(this, "Nicholas");
    
    //instance property
    this.age = 29;
}

var instance = new SubType();
print(instance.name);    //"Nicholas";
print(instance.age);     //29
       

    