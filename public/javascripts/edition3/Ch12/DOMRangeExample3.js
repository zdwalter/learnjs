//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/DOMRangeExample3.htm
//DOM Range Example
    function useRanges() {
        var p1 = document.getElementById("p1"),
            helloNode = p1.firstChild.firstChild,
            worldNode = p1.lastChild,
            range = document.createRange();
        
        range.setStart(helloNode, 2);
        range.setEnd(worldNode, 3);
        
        document.getElementById("txtStartContainer1").value = range.startContainer.nodeValue;
        document.getElementById("txtStartOffset1").value = range.startOffset;
        document.getElementById("txtEndContainer1").value = range.endContainer.nodeValue;
        document.getElementById("txtEndOffset1").value = range.endOffset;
        document.getElementById("txtCommonAncestor1").value = range.commonAncestorContainer.tagName;

    }
