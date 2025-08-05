function testClosure() {
  var x = 0;
  const functions = [];

  for (let i = 0; i < 3; i++) {
    x = i;
    functions.push(function () {
      console.log(x);
    });
  }

  console.log("x", x);

  functions.forEach((func) => func());
}

testClosure();
