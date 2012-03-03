
Debug = debug.Debug
var steps = 0;

if (typeof maxStep === 'undefined') {
    var maxStep = 100;
}

var _print = print;
var output = '';
print = function(msg) {
    output += msg +'\n';
};
function listener(event, exec_state, event_data, data) {
  if (event == Debug.DebugEvent.Break) {
      if (steps > maxStep) {
          return;
      }
      steps++;
      exec_state.prepareStep(Debug.StepAction.StepIn, 1);
      _print(JSON.stringify(exec_state.frame().func()));
      _print(JSON.stringify(exec_state.frame().sourceLine()));
      _print(output);
  }
};

// Add the debug event listener.
Debug.setListener(listener);

// Set a breakpoint on the for statement (line 1).
Debug.setBreakPoint(f, 1);

f();
// Get rid of the debug event listener.
Debug.setListener(null);

