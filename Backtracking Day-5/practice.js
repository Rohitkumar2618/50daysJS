var subsetsWithDup = function (nums) {
  //Write Code here
  let output = [];
  nums.sort((a, b) => a - b);

  function helper(i, curr) {
    if (i === nums.length) {
      output.push([...curr]);
      return;
    }

    curr.push(nums[i]);
    helper(i + 1, curr);
    curr.pop();

    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
    }

    helper(i + 1, curr);
  }

  helper(0, []);
  return output;
};
