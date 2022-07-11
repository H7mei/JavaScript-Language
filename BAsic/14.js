// rekrusif
function tampil(n) {
  // base case pemberintian
  if (n == 11) return;
  console.log(n);
  return tampil(n + 1);
}
tampil(1);

// ex
function faktorial(x) {
  if (x == 0) return 1;
  return x * faktorial(x - 1);
}

console.log(faktorial(5));
