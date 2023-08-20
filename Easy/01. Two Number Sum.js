// O(n^2) time | O(1) space
function nSquareOne(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] == sum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// O(n) time | O(n) space
function nOne(array, sum) {
  const dit = {};
  for (let i = 0; i < array.length; i++) {
    const potentialMatch = sum - array[i];
    if (potentialMatch in dit) {
      return [potentialMatch, array[i]];
    } else {
      dit[`${array[i]}`] = true;
    }
  }
  console.log(`dit : %O`, dit);
  return [];
}

// O(nlog n) time | O(1) space
function lognOne(array, sum) {
  array.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex < rightIndex) {
    const Csum = array[leftIndex] + array[rightIndex];
    if (Csum == sum) return [array[leftIndex], array[rightIndex]];
    if (Csum < sum) leftIndex++;
    if (Csum > sum) rightIndex++;
  }
  return [];
}

const arr = [8, -7, 4, 7, 8, 1, 0, -8];
const targetSum = 8;

console.log(nSquareOne(arr, targetSum));
console.log(nOne(arr, targetSum));
console.log(lognOne(arr, targetSum));
