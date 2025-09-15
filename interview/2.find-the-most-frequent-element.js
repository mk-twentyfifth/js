const array = [1, 2, 2, 3, 3, 3, 4];

const freqMap = array.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;

  // my code
  //   acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
  return acc;
}, {});

console.log("freqMap", freqMap);

// Techniques Name : "Using reduce with a comparison function to find the maximum (or most frequent) element"
// a = the current winner
// b = the next value to compare
const mostFrequent = Object.keys(freqMap).reduce((a, b) => {
  // Comparison function
  return freqMap[a] > freqMap[b] ? a : b;
});

console.log(mostFrequent);

// What I've learn
// 1. array.reduce
// 2. freqMap[a] > freqMap[b] ? a : b;
// 3. return
// 3.1 array function return