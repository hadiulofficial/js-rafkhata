/*
The shift() method removes the first element from an array and returns that removed element. 
This method changes the length of the array.
*/

function shift(arr) {
  const shiftEl = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return shiftEl;
}

const nums = [9, 2, 3, 4];

console.log(shift(nums));
