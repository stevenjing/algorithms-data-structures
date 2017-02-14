// selection sort
// sort an array of numbers by the process of linearly scanning the array
// for the smallest/largest number and moving that element to the front
// Time Complexity: O(n2)
// Space Complexity: O(1)

function selectionSort(nums) {
  let smallestIndex;
  for (let i = 0; i < nums.length; i++) {
    smallestIndex = i;
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] < nums[smallestIndex]) {
        smallestIndex = j;
      }
    }
    swap(i, smallestIndex, nums);
  }
  return nums;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

let nums = [4, 2, 9, 8, 5, 6, 1, 7, 3];
selectionSort(nums);
console.log(nums);