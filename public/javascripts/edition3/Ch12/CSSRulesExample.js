//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/CSSRulesExample.htm
//CSS Rules Example
    
function getStyleInfo(){
    var sheet = document.styleSheets[0];
    var rules = sheet.cssRules || sheet.rules;
    var rule = rules[0];
    print(rule.selectorText);
    print(rule.style.cssText);
    print(rule.style.backgroundColor);
    print(rule.style.width);
    print(rule.style.height);
}

function changeStyleInfo(){        
    var sheet = document.styleSheets[0];
    var rules = sheet.cssRules || sheet.rules;
    var rule = rules[0];    

    rule.style.backgroundColor = "red";
}

    