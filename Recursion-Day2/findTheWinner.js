// Approach one

var findTheWinner = function (n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);

  function helper(arr, startIndex) {
    // Base case
    if (arr.length === 1) {
      return arr[0];
    }
    // Recursive case
    let indexToRemove = (startIndex + k - 1) % arr.length;
    arr.splice(indexToRemove, 1);
    return helper(arr, indexToRemove);
  }

  return helper(arr, 0);
};

// Approach two

var findTheWinner = function (n, k) {
  function jspon(n) {
    if (n === 0) return 1;

    return (jspon(n - 1) + k) % n;
  }
  return jspon(n) + 1;
};

//  Approach three

var findTheWinner = function (n, k) {
  let survivor = 0;

  for (let i = 2; i <= n; i++) {
    survivor = (survivor + k) % i;
  }

  return survivor + 1;
};
