// BubbleSort
// A sorting method in which items 'bubble up' to the surface
// Time Complexity: O(n2) 
// Space Complexity: O(1)

function bubbleSort(nums) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length-1; i++) {
      if (nums[i] > nums[i+1]) {
        swap(nums, i, i+1);
        sorted = false;
      }
    }
  }
  return nums;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

let nums = [5, 3, 4, 2, 1];
bubbleSort(nums);
console.log(nums);