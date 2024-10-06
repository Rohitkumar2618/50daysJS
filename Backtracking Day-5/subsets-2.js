/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let output = [];
  nums.sort((a, b) => a - b);

  function helper(i, curr) {
    if (i === nums.length) {
      output.push([...curr]);
      return;
    }

    // include
    curr.push(nums[i]);
    helper(i + 1, curr);

    // exclude
    curr.pop();

    // duplicate element
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
    helper(i + 1, curr);
  }

  helper(0, []);
  return output;
};
