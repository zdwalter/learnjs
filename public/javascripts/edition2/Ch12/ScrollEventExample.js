//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/ScrollEventExample.htm
//Scroll Event Example
EventUtil.addHandler(window, "scroll", function(event){
    if (document.compatMode == "CSS1Compat"){
        print(document.documentElement.scrollTop);
    } else {
        print(document.body.scrollTop);
    }
});
    