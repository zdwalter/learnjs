//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/ThisObjectExample02.htm
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


