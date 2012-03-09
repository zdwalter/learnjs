//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/PrivilegedMethodExample.htm
//Privileged Method Example

    function Person(name){
    
        this.getName = function(){
            return name;
        };
    
        this.setName = function (value) {
            name = value;
        };
    }
    
    var person = new Person("Nicholas");
    print(person.getName());   //"Nicholas"
    person.setName("Greg");
    print(person.getName());   //"Greg"


