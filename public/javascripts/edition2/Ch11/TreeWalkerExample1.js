//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/TreeWalkerExample1.htm
//TreeWalker Example
   function makeList() {
        var div = document.getElementById("div1");
        var filter = function(node){
            return (node.tagName.toLowerCase() == "li") ? 
                NodeFilter.FILTER_ACCEPT : 
                NodeFilter.FILTER_SKIP;
        };
        
        var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, filter, false);

        var output = document.getElementById("text1");
        var node = walker.nextNode();
        while (node !== null) {
            output.value += node.tagName + "\n";
            node = walker.nextNode();
        }

   }

