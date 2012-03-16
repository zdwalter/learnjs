//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/ObjectKeysExample01.htm
//Object.keys() Example
    
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    print(this.name);
};

var keys = Object.keys(Person.prototype);
print(keys);   //"name,age,job,sayName"

    