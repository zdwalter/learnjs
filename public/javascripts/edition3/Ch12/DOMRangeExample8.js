//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/DOMRangeExample8.htm
//DOM Range Example
    function insertContent() {
        var p1 = document.getElementById("p1"),
            helloNode = p1.firstChild.firstChild,
            worldNode = p1.lastChild,
            range = document.createRange();
        
        range.selectNode(helloNode);
        
        var span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        range.surroundContents(span);

                        
    }
