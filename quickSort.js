// quickSort
// recursively sorts an array of numbers based partitioning via a pivot
// Time Complexity: Worst Case O(n2), Average Case O(n * log n)
// Space Complexity: O(1)

function quickSort(nums, customSort, start = 0, end) {
  end = end === undefined ? nums.length - 1 : end;
  if (!customSort) {
    customSort = (a, b) => a < b;
  }
  if (start >= end) {
    return;
  }
  let part = partition(nums, customSort, start, end);
  quickSort(nums, customSort, start, part-1);
  quickSort(nums, customSort, part+1, end);
  return nums;
}

function partition(nums, customSort, start, end) {
  let wall = start;
  let pivot = nums[end];
  for (let i = start; i < end; i++) {
    let current = nums[i];
    if (customSort(current, pivot)) {
      swap(i, wall, nums);
      wall++;
    }
  }
  swap(wall, end, nums);
  return wall;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

let nums = [9, 3, 7, 2, 6, 1, 8, 4, 5];
quickSort(nums, (a, b) => a > b);
console.log(nums);