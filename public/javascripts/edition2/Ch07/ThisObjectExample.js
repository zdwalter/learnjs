//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/ThisObjectExample.htm
//This Object Example

    var name = "The Window";
    
    var object = {
        name : "My Object",
    
        getNameFunc : function(){
            return function(){
                return this.name;
            };
        }
    };
    
    print(object.getNameFunc()());  //"The Window"


