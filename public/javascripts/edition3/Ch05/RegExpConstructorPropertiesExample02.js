//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpConstructorPropertiesExample02.htm
//RegExp Constructor Properties Example 2
    
var text = "this has been a short summer";
var pattern = /(.)hort/g;

/*
 * Note: Opera doesn't support short property names.
 * Internet Explorer doesn't support multiline.
 */        
if (pattern.test(text)){
    print(RegExp.$_);               //this has been a short summer
    print(RegExp["$`"]);            //this has been a            
    print(RegExp["$'"]);            // summer
    print(RegExp["$&"]);            //short
    print(RegExp["$+"]);            //s
    print(RegExp["$*"]);            //false
}

    