//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/GetterSetterExample2.htm
//Getter/Setter Example
//define on existing object
var person = { _name: null };
person.__defineGetter__("name", function(){
    return this._name;
});
person.__defineSetter__("name", function(value){
    if (typeof value == "string"){
        this._name = value;
    }
});

//define in constructor
function Person(){
    this._name = null;

    this.__defineGetter__("name", function(){
        return this._name;
    });

    this.__defineSetter__("name", function(value){
        if (typeof value == "string"){
            this._name = value;
        }
    });
}


person.name = "Nicholas";
print(person.name);    //"Nicholas"

var person2 = new Person();
person2.name = "Michael";
print(person2.name);   //"Michael"


    