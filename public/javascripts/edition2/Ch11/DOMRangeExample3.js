//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/DOMRangeExample3.htm
//DOM Range Example
    function useRanges() {
        var p1 = document.getElementById("p1");
        var helloNode = p1.firstChild.firstChild;
        var worldNode = p1.lastChild;
        var range = document.createRange();
        
        range.setStart(helloNode, 2);
        range.setEnd(worldNode, 3);
        
        document.getElementById("txtStartContainer1").value = range.startContainer.nodeValue;
        document.getElementById("txtStartOffset1").value = range.startOffset;
        document.getElementById("txtEndContainer1").value = range.endContainer.nodeValue;
        document.getElementById("txtEndOffset1").value = range.endOffset;
        document.getElementById("txtCommonAncestor1").value = range.commonAncestorContainer.tagName;

    }
