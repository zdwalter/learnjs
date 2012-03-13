//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample06.htm
//Prototype Pattern Example
    
var o = {
    toString : function(){
        return "My Object";
    }
}

for (var prop in o){
    if (prop == "toString"){
        print("Found toString");
    }
}

    