// why the displayName does not need the argument?

// the var name & the fn displayName are 1 level under the init so it stay at the same lexical scoping, thus by the rules it can access the

function init() {
  // init - create - var
  var name = "Mozilla";

  // init - create - fn
  function displayName() {
    console.log(name);
  }

  // init - call -fn
  displayName();
}
init();
 