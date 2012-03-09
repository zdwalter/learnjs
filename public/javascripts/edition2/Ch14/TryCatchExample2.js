//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/TryCatchExample2.htm
//Try-Catch Example
function testFinally(){
    try {
        return 2;
    } catch (error){
        return 1;
    } finally {
        return 0;
    }
}

function testWithoutFinally(){
    try {
        return 2;
    } catch (error){
        return 1;
    }
}

print(testFinally());
print(testWithoutFinally());

    