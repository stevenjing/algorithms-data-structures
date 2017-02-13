// quickSort
// recursively sorts an array of numbers based partitioning via a pivot
// Time Complexity: Worst Case O(n2), Average Case O(n * log n)
// Space Complexity: O(1)

function quickSort(nums, start = 0, end) {
  end = end === undefined ? nums.length - 1 : end;
  if (start >= end) {
    return;
  }
  let part = partition(nums, start, end);
  quickSort(nums, start, part-1);
  quickSort(nums, part+1, end);
  return nums;
}

function partition(nums, start, end) {
  let wall = start;
  let pivot = nums[end];
  for (let i = start; i < end; i++) {
    let current = nums[i];
    if (current < pivot) {
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
quickSort(nums);
console.log(nums);