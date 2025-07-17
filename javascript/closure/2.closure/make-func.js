function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// 1. makeFunc() [run] create -> displayName instance
// 2. myFunc reference to -> displayName instance
// 3. the displayName is check for the lexcial environment when it was created
