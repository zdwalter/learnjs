//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpTestExample01.htm
//RegExp test() Example
var text = "cat, bat, sat, fat";        
var pattern = /.at/;

if (pattern.test(text)){
    print("The pattern was matched.");
}

    