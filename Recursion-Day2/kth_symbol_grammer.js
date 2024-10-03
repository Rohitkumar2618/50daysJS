function kthGrammer(n, k) {
  if (n === 1) return 0;

  let len = Math.pow(2, n - 1);
  let mid = len / 2;

  if (k <= mid) {
    return kthGrammer(n - 1, k);
  } else {
    return 1 - kthGrammer(n - 1, k - mid);
  }
}
