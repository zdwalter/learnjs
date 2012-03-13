//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/ContinueStatementExample02.htm
//Continue Statement Example 2
var num = 0;

outermost:
for (var i=0; i < 10; i++) {
     for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost;
        }
        num++;
    }
}

print(num);    //95




    