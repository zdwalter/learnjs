//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch17/TryCatchExample01.htm
//Try-Catch Example
try {
    window.someNonexistentFunction();
} catch (error){
    print(error.name);
    print(error.message);
}

    