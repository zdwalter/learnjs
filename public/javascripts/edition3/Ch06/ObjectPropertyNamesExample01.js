//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/ObjectPropertyNamesExample01.htm
//Object.getOwnPropertyNames() Example
    
function Person(){
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    print(this.name);
};

var keys = Object.getOwnPropertyNames(Person.prototype);
print(keys);   //"constructor,name,age,job,sayName"

    