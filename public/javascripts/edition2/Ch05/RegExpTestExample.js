//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/RegExpTestExample.htm
//RegExp test() Example
var text = "cat, bat, sat, fat";        
var pattern = /.at/;

if (pattern.test(text)){
    print("The pattern was matched.");
}

    