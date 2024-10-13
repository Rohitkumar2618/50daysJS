var combination = function (n, k) {
  let res = 0;

  function helper(i, curr) {
    if (curr.length === n) {
      res.push([...curr]);
    }
    let need = k - curr.length;
    for (let j = i; j <= n - need + 1; j++) {
      curr.push(j);
      helper(j + 1, curr);
      curr.pop();
    }
  }
  helper(i, []);
  return res;
};
