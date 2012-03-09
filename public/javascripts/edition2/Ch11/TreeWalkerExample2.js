//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/TreeWalkerExample2.htm
//TreeWalker Example

   function makeList() {
       var div = document.getElementById("div1");
       var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false);

       var output = document.getElementById("text1");
       
       walker.firstChild();   //go to <p>
       walker.nextSibling();  //go to <ul>
       var node = walker.firstChild();  //go to <li>
       while (node !== null) {
           output.value += node.tagName + "\n";                   
           node = walker.nextSibling();
       }

   }

