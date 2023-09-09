function validateSubsequence(array, seq) {
  let p = 0,
    bool = false;
  for (let i = 0; i < array.length; i++) {
    if (seq[p] === array[i]) {
      p++;
      if (p == seq.length) return (bool = true);
    }
  }
  return bool;
}
const mainarr = [1, 2, 4, 8];
const seqarr = [2, 4];
console.log(`subsequence is: `, validateSubsequence(mainarr, seqarr));
