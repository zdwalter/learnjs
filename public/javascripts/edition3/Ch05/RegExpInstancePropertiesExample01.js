//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpInstancePropertiesExample01.htm
//RegExp Instance Properties Example
var pattern1 = /\[bc\]at/i;

print(pattern1.global);     //false
print(pattern1.ignoreCase); //true
print(pattern1.multiline);  //false
print(pattern1.lastIndex);  //0
print(pattern1.source);     //"\[bc\]at"

var pattern2 = new RegExp("\\[bc\\]at", "i");

print(pattern2.global);     //false
print(pattern2.ignoreCase); //true
print(pattern2.multiline);  //false
print(pattern2.lastIndex);  //0
print(pattern2.source);     //"\[bc\]at"

    