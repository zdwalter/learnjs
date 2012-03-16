//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/StringTypePatternMatchingExample01.htm
//String Type Pattern Matching Example
    
var text = "cat, bat, sat, fat"; 
var pattern = /.at/;

var matches = text.match(pattern);        
print(matches.index);        //0
print(matches[0]);           //"cat"
print(pattern.lastIndex);    //0

var pos = text.search(/at/);
print(pos);   //1

var result = text.replace("at", "ond");
print(result);    //"cond, bat, sat, fat"

result = text.replace(/at/g, "ond");
print(result);    //"cond, bond, sond, fond"

result = text.replace(/(.at)/g, "word ($1)");
print(result);    //word (cat), word (bat), word (sat), word (fat)

function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }             
    });
}

print(htmlEscape("<p class=\"greeting\">Hello world!</p>")); //&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");      //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2);   //["red", "blue"]
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]



    