//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/GetterSetterExample.htm
//Getter/Setter Example
var person = {
    _name: null,

    get name(){
        return this._name;
    },

    set name(value){
        if (typeof value == "string"){
            this._name = value;
        }
    }
};

person.name = "Nicholas";
print(person.name);    //"Nicholas"

    