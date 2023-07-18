/*
The keys() method returns a new array iterator object that contains the keys for each index in the array.
*/

function keys(arr) {
  const keys = [];

  for (let i = 0; i < arr.length; i++) {
    keys.push(i);
  }

  return keys;
}

const words = ['a', 'b', 'c'];
const iterator = keys(words)

console.log(iterator)



