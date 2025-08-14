const intervalID = setInterval(myCallback, 500, "hello worlds");

// the const is not working due to the block scope and the JS's hoisting
// const myCallback = (param) => {
//   console.log(param);
// };

function myCallback(param) {
  console.log(param);
}
