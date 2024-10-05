function powerSum(array, power = 1) {
  let sum = 0;

  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += powerSum(itme, powe + 1);
    } else {
      sum += item;
    }
  });
  return Math.pow(sum, power);
}
