/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  // if the array is empty
  if (nums.length <= 1) return true;

  const first = nums[0];
  const last = nums[nums.length - 1];

  //  if the last ans first same
  if (first === last) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        return false;
      }
    }
  }
  //     get the
  if (first < last) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) return false;
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) return false;
    }
  }

  return true;
};
