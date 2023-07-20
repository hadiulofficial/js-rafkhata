/*
The Array.isArray() static method determines whether the passed value is an Array.
*/

function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}

console.log(isArray([3, 5]));
console.log(isArray([]));
console.log(isArray({}));
console.log(isArray("string"));
