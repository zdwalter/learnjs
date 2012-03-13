//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/ContentEditableExample01.htm
//Content Editable Example

(function(){
    
    EventUtil.addHandler(window, "load", function(){
        //document.getElementById("richedit").designMode = "on";
    });
    
    var simple = document.getElementById("divSimple");
    var complex = document.getElementById("divComplex");
    var queryDiv = document.getElementById("divQuery");                
    
    EventUtil.addHandler(document.forms[0], "submit", function(){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
    
        target.elements["comments"].value = document.getElementById("richedit").innerHTML;
    });
    
    EventUtil.addHandler(simple, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (target.type == "button"){                    
            document.execCommand(target.value.toLowerCase(), false, null);                        
        }
    
    });

    EventUtil.addHandler(complex, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        switch(target.id){
            case "btnGetHtml":
                print(document.getElementById("richedit").innerHTML);
                break;
            case "btnCreateLink":
                var link = prompt("What link?", "http://www.wrox.com");
                if (link){
                    document.execCommand("createlink", false, link);
                }
                break;
            case "btnChangeFontSize":
                var size = prompt("What size? (1-7)", "7");
                if (size){
                    document.execCommand("fontsize", false, parseInt(size,10));
                }
                break;
            case "btnGetSelected":
                if (window.getSelection){
                    print(window.getSelection().toString());
                } else if (document.selection){
                    print(document.selection.createRange().text);
                }
                break;
            case "btnHighlight":
                if (window.getSelection){
                    var selection = window.getSelection();
                    
                    //get the range representing the selection
                    var range = selection.getRangeAt(0);
                    
                    //highlight the selected text
                    var span = document.createElement("span");
                    span.style.backgroundColor = "yellow";
                    range.surroundContents(span);
                   
                } else if (document.selection){
                    var range = document.selection.createRange();
                    range.pasteHTML("<span style=\"background-color:yellow\">" + range.htmlText + "</span>");
                }
                break;
        }

    });
    
    EventUtil.addHandler(queryDiv, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (target.type == "button"){
            print(document.queryCommandState(target.value.toLowerCase(), false, null));
        }
    });

})();
    
    