// Scope

// use strict

// ini global scope / window Scope
var a = 1;
var c = 1;
// variabel lokal
function tes() {
  var b = 2;
  // name confict
  var a = 4;
  c = 4;
  console.log(b);
  console.log(a);
  console.log(window.a);
}

tes();
console.log(a);
console.log(c);

// more examples
var g = 1;

function tols(g) {
  console.log(9);
}

tols(8);
console.log(a);
