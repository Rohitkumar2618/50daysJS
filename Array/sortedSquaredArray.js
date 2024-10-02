//! Approach one ---> Brute force

function sortedSquarredArray(array) {
  //write code here.make sure to return desired array

  //    ! create a new array
  const newArray = new Array(array.length).fill(0);

  //  ! traverse the array and add squared of every element into the new array
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }

  //   Sort the new array
  newArray.sort((a, b) => a - b);

  //   ? return the new array
  return newArray;
}

// ! Optimal solution

var sortedSquares = function (nums) {
  let newArray = new Array(nums.length).fill(0);

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const leftSquared = nums[leftPointer] ** 2; // Square the value at leftPointer
    const rightSquared = nums[rightPointer] ** 2; // Square the value at rightPointer

    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      leftPointer++;
    } else {
      newArray[i] = rightSquared;
      rightPointer--;
    }
  }

  return newArray;
};
