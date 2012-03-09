//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/NodeIteratorExample2.htm
//NodeIterator Example

   function makeList() {
        var div = document.getElementById("div1");
        var filter = function(node){
            return (node.tagName.toLowerCase() == "li") ? 
                NodeFilter.FILTER_ACCEPT : 
                NodeFilter.FILTER_SKIP;
        };

        var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, filter, false);
        //For Firefox: iterator = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, filter, false);
       
        var output = document.getElementById("text1");
        var node = iterator.nextNode();
        while (node !== null) {
            output.value += node.tagName + "\n";
            node = iterator.nextNode();
        }

   }

