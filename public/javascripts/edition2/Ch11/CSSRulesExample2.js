//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/CSSRulesExample2.htm
//CSS Rules Example
    
function insertRule(sheet, selectorText, cssText, position){
    if (sheet.insertRule){
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    } else if (sheet.addRule){
        sheet.addRule(selectorText, cssText, position);
    }
}

function deleteRule(sheet, index){
    if (sheet.deleteRule){
        sheet.deleteRule(index);
    } else if (sheet.removeRule){
        sheet.removeRule(index);
    }
}
    
function addNewRule(){        
    var sheet = document.styleSheets[0];
    insertRule(sheet, "body", "background-color: silver;", 0);       
    //Note: Opera < 9.5 doesn't add the rule in the correct location     
}

function removeFirstRule(){
    var sheet = document.styleSheets[0];
    deleteRule(sheet, 0);           
}

    