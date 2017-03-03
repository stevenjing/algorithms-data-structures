function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const half1 = mergeSort(array.slice(0, mid));
  const half2 = mergeSort(array.slice(mid, array.length));

  return merge(half1, half2);
}

function merge(array1, array2) {
  let index1 = index2 = 0;
  let merged = [];
  let value1, value2;

  while (index1 < array1.length || index2 < array2.length) {
    value1 = array1[index1];
    value2 = array2[index2];

    if (index1 > array1.length-1) {
      merged.push(value2);
      index2++;
    } else if (index2 > array2.length-1) {
      merged.push(value1);
      index1++;
    } else if (value1 < value2) {
      merged.push(value1);
      index1++;
    } else {
      merged.push(value2);
      index2++;
    }
  }
  return merged;
}

console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));