//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/CSSRulesExample.htm
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

    