//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch06/CreatingObjectsExample.htm
//Creating Objects Example
    
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function(){
    print(this.name);
};

person.sayName();

    