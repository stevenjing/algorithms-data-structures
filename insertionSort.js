// insertion sort
// sort an array of numbers by inserting from an unsorted partition to a sorted partition

function insertionSort(arr, comparator) {
  if (!comparator) {
    comparator = (a, b) => a < b;
  }
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = i;
    while(current > 0 && comparator(arr[current], arr[current-1])) {
      swap(current, current-1, arr);
      current--;
    }
  }
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

let nums = [5, 4, 3, 2, 1, 6, 8, 9, 7];
insertionSort(nums, (a, b) => a > b);
console.log(nums);