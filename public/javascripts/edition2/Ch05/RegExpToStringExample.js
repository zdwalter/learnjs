//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/RegExpToStringExample.htm
//RegExp toString() Example
      
var pattern = new RegExp("\\[bc\\]at", "gi");
print(pattern.toString());    // /\[bc\]at/gi
print(pattern.toLocaleString());    // /\[bc\]at/gi

    