//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/RegExpConstructorPropertiesExample03.htm
//RegExp Constructor Properties Example 2
    
var text = "this has been a short summer";
var pattern = /(..)or(.)/g;
      
if (pattern.test(text)){
    print(RegExp.$1);       //sh
    print(RegExp.$2);       //t
}

    