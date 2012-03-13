//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpExecExample01.htm
//RegExp exec() Example
var text = "mom and dad and baby";

var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);

print(matches.index);    //0
print(matches.input);    //"mom and dad and baby"
print(matches[0]);       //"mom and dad and baby"
print(matches[1]);       //" and dad and baby"
print(matches[2]);       //" and baby"

    