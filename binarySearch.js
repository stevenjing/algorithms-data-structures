function binarySearch(array, target, start = 0, end) {
  end = end === undefined ? array.length - 1 : end;

  let mid = Math.floor( (start + end) / 2);

  if (array[mid] === target) {
    return true;
  } else if (mid === start) {
    return false;
  } else if (array[mid] > target) {
    return binarySearch(array, target, start, mid - 1);
  } else if (array[mid] < target) {
    return binarySearch(array, target, mid + 1, end);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -2));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -2));
