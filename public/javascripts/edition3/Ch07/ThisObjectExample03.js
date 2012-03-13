//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/ThisObjectExample03.htm
//This Object Example 3

    var name = "The Window";
    
    var object = {
        name : "My Object",
    
        getName: function(){
            return this.name;
        }
    };
    
    print(object.getName());     //"My Object"
    print((object.getName)());   //"My Object"
    print((object.getName = object.getName)());   //"The Window" in non-strict mode

