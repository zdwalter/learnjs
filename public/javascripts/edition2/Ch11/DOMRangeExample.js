//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/DOMRangeExample.htm
//DOM Range Example
    function useRanges() {
        var range1 = document.createRange();
        var range2 = document.createRange();
        var oP1 = document.getElementById("p1");
        range1.selectNode(oP1);
        range2.selectNodeContents(oP1);
        
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
