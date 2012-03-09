//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/PrototypePatternExample6.htm
//Prototype Pattern Example 6
    
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

    