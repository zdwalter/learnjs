function _f() {
//INSERT_CODE
    process.exit(0);
}
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
      var frame = exec_state.frame();
      step = {
        event: "step_line",
        func_name: "",//frame.func(),
        globals: {},
        line: frame.sourceLine(),
        stack_locals: [],
        stdout: output,
        }
      _print(JSON.stringify(step));
  }
};

// Add the debug event listener.
Debug.setListener(listener);

// Set a breakpoint on the for statement (line 1).
Debug.setBreakPoint(_f, 1);

_f();
// Get rid of the debug event listener.
Debug.setListener(null);

