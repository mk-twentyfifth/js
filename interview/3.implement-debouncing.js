function debounce(fn, delay) {
  let timer; // act as ID to remove the timeout
  //

  return function (...args) {
    // clear the timeout if it persist from the previous state? or execution?

    // cancels a pending setTimeout if it hasn’t run yet.

    clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), delay);
    // timer is a uniqueId that returned from the setTimeout()
  };
}

const handleResize = debounce(() => {
  console.log("window resized:", new Date().toLocaleTimeString());
}, 500);

window.addEventListener("resize", handleResize);

// What I've Learn
// 1. setTimeout (anonymous function, named function, passing argument)

// 1.1 main thread - I/O blocking
// 1.2 call stack (stack to be call?)
// 1.3 event loop
// 1.4 event queue
// 1.5 return the UniqueID when the timeout Set

// 2. clearTimeout - cancel using the uniqueID set by setTimeout

// 3. fn.apply
// 4. this
// 5. Date.toLocalTimeString()
// 6. How to run this code in browser in (3.1)
