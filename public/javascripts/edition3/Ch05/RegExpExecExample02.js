//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpExecExample02.htm
//RegExp exec() Example 2
var text = "cat, bat, sat, fat";        
var pattern1 = /.at/;

var matches = pattern1.exec(text);        
print(matches.index);    //0
print(matches[0]);       //"cat"
print(pattern1.lastIndex);//0

matches = pattern1.exec(text);        
print(matches.index);    //0
print(matches[0]);       //"cat"
print(pattern1.lastIndex);//0

var pattern2 = /.at/g;

var matches = pattern2.exec(text);        
print(matches.index);    //0
print(matches[0]);       //"cat"
print(pattern2.lastIndex);//0

matches = pattern2.exec(text);        
print(matches.index);    //5
print(matches[0]);       //"bat"
print(pattern2.lastIndex);//0

    