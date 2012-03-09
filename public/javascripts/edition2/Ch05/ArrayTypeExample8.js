//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/ArrayTypeExample8.htm
//Array Type Example 8
var person1 = {
    toLocaleString : function () {
        return "Nikolaos";
    },
    
    toString : function() {
        return "Nicholas";
    }
};

var person2 = {
    toLocaleString : function () {
        return "Grigorios";
    },
    
    toString : function() {
        return "Greg";
    }
};

var people = [person1, person2];
print(people);                      //Nicholas,Greg
print(people.toString());           //Nicholas,Greg
print(people.toLocaleString());     //Nikolaos,Grigorios

    