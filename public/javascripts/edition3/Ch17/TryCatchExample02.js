//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch17/TryCatchExample02.htm
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

    