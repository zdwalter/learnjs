//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/PluginDetectionExample3.htm
//Plugin Detection Example 3

    //plugin detection - doesn't work in IE
    function hasPlugin(name){
        name = name.toLowerCase();
        for (var i=0; i < navigator.plugins.length; i++){
            if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
                return true;
            }
        }
    
        return false;
    }        

    //plugin detection for IE
    function hasIEPlugin(name){
        try {
            new ActiveXObject(name);
            return true;
        } catch (ex){
            return false;
        }
    }
    
    //detect flash for all browsers
    function hasFlash(){
        var result = hasPlugin("Flash");
        if (!result){
            result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
        }
        return result;
    }
    
    //detect quicktime for all browsers
    function hasQuickTime(){
        var result = hasPlugin("QuickTime");
        if (!result){
            result = hasIEPlugin("QuickTime.QuickTime");
        }
        return result;
    }
    
    //detect flash
    print(hasFlash());
    
    //detect quicktime
    print(hasQuickTime());

