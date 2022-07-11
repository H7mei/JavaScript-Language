// Array
// cara pertama
var binatang = ["kucing", "kelinci", "marmut", "ikan", "paus"];

console.log(binatang[2]);
// cara kedua
var hewan = [];
hewan = ["kucing", 123, "marmut", "ikan", "paus"];

console.log(hewan.length);
console.log(hewan[3]);
console.log(hewan[3].length);
console.log(typeof hewan);

if (hewan[1] == 123) {
  console.log("benar");
}

// contoh
var myFunction = function () {
  console.log("hello world!");
};
var myArray = ["kucing", 123, myFunction, "ikan", "paus"];

console.log(myArray[2]);

// contoh
var myArray2 = ["kucing", 123, myFunction, false, [1, 2, 3, [1, "boom", 3, 4], 5, 6, 7, 8]];

console.log(myArray2[4]);
console.log(myArray2[4][2]);
console.log(myArray2[4][3][1]);
