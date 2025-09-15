const array = [1, 2, 2, 3, 4, 4, 5];

const set = new Set(array);

// Solution1
const uniqueArrayUsingSet = [...set];

// Solution2
const uniqueArrayUsingFrom = Array.from(set);

// Shorthand = Combine the Set + Spread + Array Conversion
const uniqueArr = [...new Set(array)];

console.log(uniqueArr);
console.log(uniqueArrayUsingFrom);
console.log(uniqueArrayUsingSet);

// what I've learn
// 1. Map
// 2. Array.From
// 3. Spread
