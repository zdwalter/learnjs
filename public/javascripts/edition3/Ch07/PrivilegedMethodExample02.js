//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/PrivilegedMethodExample02.htm
//Privileged Method Example 2

    (function(){
    
        var name = "";
        
        Person = function(value){                
            name = value;                
        };
        
        Person.prototype.getName = function(){
            return name;
        };
        
        Person.prototype.setName = function (value){
            name = value;
        };
    })();
    
    var person1 = new Person("Nicholas");
    print(person1.getName());   //"Nicholas"
    person1.setName("Greg");
    print(person1.getName());   //"Greg"
                       
    var person2 = new Person("Michael");
    print(person1.getName());   //"Michael"
    print(person2.getName());   //"Michael"

