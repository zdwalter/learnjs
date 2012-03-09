//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/ContinueStatementExample1.htm
//Continue Statement Example 1
var num = 0;

for (var i=1; i < 10; i++) {
    if (i % 5 == 0) {
        continue;
    }
    num++;
}

print(num);    //8



    