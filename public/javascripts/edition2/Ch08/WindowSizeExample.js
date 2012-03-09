//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/WindowSizeExample.htm
//Window Size Example

    var pageWidth = window.innerWidth,
        pageHeight = window.innerHeight;
        
    if (typeof pageWidth != "number"){
        if (document.compatMode == "CSS1Compat"){
            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        } else {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }

    print("Width: " + pageWidth);
    print("Height: " + pageHeight);
