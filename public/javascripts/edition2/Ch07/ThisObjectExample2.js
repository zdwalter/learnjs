//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/ThisObjectExample2.htm
//This Object Example 2

    var name = "The Window";
    
    var object = {
        name : "My Object",
    
        getNameFunc : function(){
            var that = this;
            return function(){
                return that.name;
            };
        }
    };
    
    print(object.getNameFunc()());  //"MyObject"


