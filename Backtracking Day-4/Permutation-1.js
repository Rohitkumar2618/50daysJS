/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let n = nums.length;

  function helper(i) {
    // Base case
    if (i === n - 1) {
      res.push([...nums]);
      return;
    }
    //    recursive call
    for (let j = i; j < n; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      helper(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  helper(0);
  return res;
};
