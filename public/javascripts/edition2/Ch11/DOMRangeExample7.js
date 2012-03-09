//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/DOMRangeExample7.htm
//DOM Range Example
    function insertContent() {
        var p1 = document.getElementById("p1");
        var helloNode = p1.firstChild.firstChild;
        var worldNode = p1.lastChild;
        var range = document.createRange();
        var span = document.createElement("span");
        span.style.color = "red";
        span.appendChild(document.createTextNode("Inserted text"));
        
        range.setStart(helloNode, 2);
        range.setEnd(worldNode, 3);
        range.insertNode(span);
                        
    }
