//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/RegExpConstructorPropertiesExample.htm
//RegExp Constructor Properties Example
    
var text = "this has been a short summer";
var pattern = /(.)hort/g;

/*
 * Note: Opera doesn't support input, lastMatch, lastParen, or multiline.
 * Internet Explorer doesn't support multiline.
 */        
if (pattern.test(text)){
    print(RegExp.input);               //this has been a short summer
    print(RegExp.leftContext);         //this has been a            
    print(RegExp.rightContext);        // summer
    print(RegExp.lastMatch);           //short
    print(RegExp.lastParen);           //s
    print(RegExp.multiline);           //false
}

    