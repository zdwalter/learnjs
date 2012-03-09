//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/NodeIteratorExample1.htm
//NodeIterator Example

   function makeList() {
       var div = document.getElementById("div1");
       var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, null, false);

       var output = document.getElementById("text1");
       var node = iterator.nextNode();
       while (node !== null) {
           output.value += node.tagName + "\n";
           node = iterator.nextNode();
       }

   }

