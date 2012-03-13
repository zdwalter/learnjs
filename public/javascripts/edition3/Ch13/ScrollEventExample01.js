//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/ScrollEventExample01.htm
//Scroll Event Example
EventUtil.addHandler(window, "scroll", function(event){
    if (document.compatMode == "CSS1Compat"){
        print(document.documentElement.scrollTop);
    } else {
        print(document.body.scrollTop);
    }
});
    