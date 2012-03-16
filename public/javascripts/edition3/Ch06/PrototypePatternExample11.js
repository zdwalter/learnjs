//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/PrototypePatternExample11.htm
//Prototype Pattern Example
            
            
print(typeof Array.prototype.sort);         //"function"
print(typeof String.prototype.substring);   //"function"

String.prototype.startsWith = function (text) {
    return this.indexOf(text) == 0;
};

var msg = "Hello world!";
print(msg.startsWith("Hello"));   //true

    