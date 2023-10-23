///// merge sort using recursion
///// merge sort using recursion
///// merge sort using recursion

const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  /// get the middle index
  let middle = Math.floor(arr.length / 2);
  /// split the array into two equivalent (approximately) arrays
  let [left, right] = [arr.slice(0, middle), arr.slice(middle)];
  return merge(mergeSort(left), mergeSort(right));
};

///
const merge = (leftArr, rightArr) => {
  /// array which my sub-elements are going to merge into
  let merged = [];
  // default starting indexes
  let leftIndex = 0;
  let rightIndex = 0;

  /// compare values of arrays at index, then increment index

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      merged.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      merged.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArr.length) {
    merged.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    merged.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return merged;
};
