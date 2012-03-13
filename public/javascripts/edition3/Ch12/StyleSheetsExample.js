//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/StyleSheetsExample.htm
//Style Sheets Example
function outputStyleSheets(){
    var sheet = null;
    for (var i=0, len=document.styleSheets.length; i < len; i++){
        sheet = document.styleSheets[i];
        print(sheet.href);
    }
}

function toggleStyleSheet(){
    document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
}
    