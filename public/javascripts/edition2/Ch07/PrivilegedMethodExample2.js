//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/PrivilegedMethodExample2.htm
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
    
    var person = new Person("Nicholas");
    print(person.getName());   //"Nicholas"
    person.setName("Greg");
    print(person.getName());   //"Greg"


