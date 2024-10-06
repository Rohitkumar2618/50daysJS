/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = [];

  const helper = function (nums, i, subset) {
    if (i === nums.length) {
      output.push(subset.slice());
      return;
    }

    //    don't add
    helper(nums, i + 1, subset);

    // add
    subset.push(nums[i]);
    helper(nums, i + 1, subset);

    //  remove
    subset.pop();
  };
  helper(nums, 0, []);
  return output;
};
