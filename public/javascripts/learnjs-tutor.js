/*
 * Learn Javascript (http://learnjs.info)
 * Copyright (C) 2012 Walter Zheng (zdwalter@gmail.com)
 * https://github.com/zdwalter/learnjs
 */


/*
Thanks to
*/
/*
Online Python Tutor
Copyright (C) 2010-2011 Philip J. Guo (philip@pgbovine.net)
https://github.com/pgbovine/OnlinePythonTutor/

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

// The Online Python Tutor front-end, which calls the cgi-bin/web_exec.py
// back-end with a string representing the user's script POST['user_script']
// and receives a complete execution trace, which it parses and displays to HTML.

// Pre-req: edu-python.js and jquery.ba-bbq.min.js should be imported BEFORE this file


function enterEditMode() {
  $.bbq.pushState({ mode: 'edit' });
}

function enterVisualizeMode(traceData) {
  curTrace = traceData; // first assign it to the global curTrace, then
                        // let jQuery BBQ take care of the rest
  $.bbq.pushState({ mode: 'visualize' });
}


$(document).ready(function() {
  JSCommonInit(); // must call this first!

  $("#jsInput").tabby(); // recognize TAB and SHIFT-TAB


  // be friendly to the browser's forward and back buttons
  // thanks to http://benalman.com/projects/jquery-bbq-plugin/
  $(window).bind("hashchange", function(e) {
    appMode = $.bbq.getState("mode"); // assign this to the GLOBAL appMode

    // default mode is 'edit'
    if (appMode == undefined) {
      appMode = 'edit';
    }

    // if there's no curTrace, then default to edit mode since there's
    // nothing to visualize:
    if (!curTrace) {
      appMode = 'edit';
      $.bbq.pushState({ mode: 'edit' });
    }


    if (appMode == 'edit') {
      $("#inputPane").show();
      $("#outputPane").hide();
    }
    else if (appMode == 'visualize') {
      $("#inputPane").hide();
      $("#outputPane").show();

      $('#executeBtn').html("Visualize execution");
      $('#executeBtn').attr('disabled', false);


      // do this AFTER making #outputPane visible, or else
      // jsPlumb connectors won't render properly
      processTrace(curTrace /* kinda dumb and redundant */, false);
    }
    else {
      assert(false);
    }
  });

  // From: http://benalman.com/projects/jquery-bbq-plugin/
  //   Since the event is only triggered when the hash changes, we need
  //   to trigger the event now, to handle the hash the page may have
  //   loaded with.
  $(window).trigger( "hashchange" );


  $("#executeBtn").attr('disabled', false);
  $("#executeBtn").click(function() {
    $('#executeBtn').html("Please wait ... processing your code");
    $('#executeBtn').attr('disabled', true);
    $("#outputPane").hide();

    $.post("/jdb",
           {user_script : $("#jsInput").val()},
           function(traceData) {
               //traceData = JSON.parse(traceData);
             if ($.debug) console.log(traceData);
             renderCodeOutput($("#jsInput").val());
             enterVisualizeMode(traceData);
           },
           "json");
  });


  $("#editBtn").click(function() {
    enterEditMode();
  });


  // canned examples

  //$("#tutorialExampleLink").click(function() {
  //  $.get("example-code/py_tutorial.txt", function(dat) {$("#jsInput").val(dat);});
  //  return false;
  //});
  // select an example on start-up:
  //$("#aliasExampleLink").trigger('click');
});

