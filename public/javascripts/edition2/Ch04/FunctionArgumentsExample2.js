//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch04/FunctionArgumentsExample2.htm
//Function Arguments Example 2
function setName(obj) {
    obj.name = "Nicholas";
}

var person = new Object();
setName(person);
print(person.name);    //"Nicholas"

    