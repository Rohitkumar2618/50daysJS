function kthGrammer(n, k) {
  // base case
  if (n === 1) return 0;

  let length = Math.pow(2, n - 1);
  let mid = length / 2;

  //   Recursive logic
  if (k <= mid) {
    return kthGrammer(n - 1, k);
  } else {
    return 1 - kthGrammer(n - 1, k - mid);
  }
}
