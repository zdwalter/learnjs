//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/PrivilegedMethodExample01.htm
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


