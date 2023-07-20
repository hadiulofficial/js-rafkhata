/*
The values() method returns a new array iterator object that iterates the value of each item in the array.
*/

function values(arr) {
  const values = [];

  for (let i = 0; i < arr.length; i++) {
    values.push(arr[i]);
  }

  return values;
}

const words = ["a", "b", "c"];
const iterator = values(words);

console.log(iterator);
