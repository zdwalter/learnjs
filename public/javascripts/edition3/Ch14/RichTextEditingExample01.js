//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch14/RichTextEditingExample01.htm
//Rich Text Editing Example

(function(){
    
    EventUtil.addHandler(window, "load", function(){
        frames["richedit"].document.designMode = "on";
    });
    
    var simple = document.getElementById("divSimple");
    var complex = document.getElementById("divComplex");
    var queryDiv = document.getElementById("divQuery");                
    
    EventUtil.addHandler(document.forms[0], "submit", function(){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
    
        target.elements["comments"].value = frames["richedit"].document.body.innerHTML;
    });
    
    EventUtil.addHandler(simple, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (target.type == "button"){                    
            frames["richedit"].document.execCommand(target.value.toLowerCase(), false, null);                        
        }
    
    });

    EventUtil.addHandler(complex, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        switch(target.id){
            case "btnGetHtml":
                print(frames["richedit"].document.body.innerHTML);
                break;
            case "btnCreateLink":
                var link = prompt("What link?", "http://www.wrox.com");
                if (link){
                    frames["richedit"].document.execCommand("createlink", false, link);
                }
                break;
            case "btnChangeFontSize":
                var size = prompt("What size? (1-7)", "7");
                if (size){
                    frames["richedit"].document.execCommand("fontsize", false, parseInt(size,10));
                }
                break;
            case "btnGetSelected":
                if (frames["richedit"].getSelection){
                    print(frames["richedit"].getSelection().toString());
                } else if (frames["richedit"].document.selection){
                    print(frames["richedit"].document.selection.createRange().text);
                }
                break;
            case "btnHighlight":
                if (frames["richedit"].getSelection){
                    var selection = frames["richedit"].getSelection();
                    
                    //get the range representing the selection
                    var range = selection.getRangeAt(0);
                    
                    //highlight the selected text
                    var span = frames["richedit"].document.createElement("span");
                    span.style.backgroundColor = "yellow";
                    range.surroundContents(span);
                   
                } else if (frames["richedit"].document.selection){
                    var range = frames["richedit"].document.selection.createRange();
                    range.pasteHTML("<span style=\"background-color:yellow\">" + range.htmlText + "</span>");
                }
                break;
        }

    });
    
    EventUtil.addHandler(queryDiv, "click", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        
        if (target.type == "button"){
            print(frames["richedit"].document.queryCommandState(target.value.toLowerCase(), false, null));
        }
    });

})();
    
    