//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/ThisObjectExample01.htm
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


    