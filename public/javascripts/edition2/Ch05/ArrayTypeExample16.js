//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/ArrayTypeExample16.htm
//Array Type Example 16
function compare(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);
print(values);    //15,10,5,1,0

    