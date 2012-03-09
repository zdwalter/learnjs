//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/DOMRangeExample2.htm
//DOM Range Example
    function useRanges() {
        var range1 = document.createRange();
        var range2 = document.createRange();
        var p1 = document.getElementById("p1");
        
        var p1Index = -1;
        for (var i=0, len=p1.parentNode.childNodes.length; i < len; i++) {
            if (p1.parentNode.childNodes[i] == p1) {
                p1Index = i;
                break;
            }
        }
                
        range1.setStart(p1.parentNode, p1Index);
        range1.setEnd(p1.parentNode, p1Index + 1);
        range2.setStart(p1, 0);
        range2.setEnd(p1, p1.childNodes.length);

        
        document.getElementById("txtStartContainer1").value = range1.startContainer.tagName;
        document.getElementById("txtStartOffset1").value = range1.startOffset;
        document.getElementById("txtEndContainer1").value = range1.endContainer.tagName;
        document.getElementById("txtEndOffset1").value = range1.endOffset;
        document.getElementById("txtCommonAncestor1").value = range1.commonAncestorContainer.tagName;

        document.getElementById("txtStartContainer2").value = range2.startContainer.tagName;
        document.getElementById("txtStartOffset2").value = range2.startOffset;
        document.getElementById("txtEndContainer2").value = range2.endContainer.tagName;
        document.getElementById("txtEndOffset2").value = range2.endOffset;
        document.getElementById("txtCommonAncestor2").value = range2.commonAncestorContainer.tagName;
    }
