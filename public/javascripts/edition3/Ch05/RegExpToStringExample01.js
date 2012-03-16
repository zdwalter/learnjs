//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpToStringExample01.htm
//RegExp toString() Example
      
var pattern = new RegExp("\\[bc\\]at", "gi");
print(pattern.toString());    // /\[bc\]at/gi
print(pattern.toLocaleString());    // /\[bc\]at/gi

    