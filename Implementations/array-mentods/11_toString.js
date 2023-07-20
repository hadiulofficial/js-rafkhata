/*
The toString() method returns a string representing the specified array and its elements.
*/

function toString(arr) {
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    res += arr[i];


    if (i !== arr.length - 1) {
      res += ",";
    }
  }

  return res;
}

const array1 = [1, 2, "a", "1a"];

console.log(toString(array1));
