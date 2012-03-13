//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/BreakStatementExample01.htm
//Break Statement Example 1
var num = 0;

for (var i=1; i < 10; i++) {
    if (i % 5 == 0) {
        break;
    }
    num++;
}

print(num);    //4



    