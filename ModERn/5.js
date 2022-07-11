// higher order function
// kita dapat menjadikan function sebagai arguments
// contoh
// <Tugas> ini dapat di sebut higher order function
// <selesai> ini disebu callback
function Tugas(mataKuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
  selesai();
}
function selesai() {
  console.log("Tugas telah Selesai");
}
// kita dapat menyimpan function sebagai arguments
Tugas("WebPrograming", selesai);

// ini adalah contoh prototype dari tipe data array
const angka = [11, 21, -40, 2, 3, 27, -10, 2];
// Array.prototype.filter();
// mencari angka >= 3

// for
// const hasil = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     hasil.push(angka[i]);
//   }
// }
// console.log(hasil);

// filter
// const hasil = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(hasil);

// arrow function filter
const hasil = angka.filter((a) => a >= 3);
console.log(hasil.join(" "));

// Array.prototype.map();
// mengalikan semua element yang ada di array
const mapAngka = angka.map((a) => a * 2);
console.log(mapAngka.join(" "));

// Array.prototype.reduce();
// jumlahkan seluruh element pada array
// punya dua argumet
//  <tambhan>9 + 11 + 231 + -40 + 2 + 3 + 21 + -10 + 2
const reduceAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 9);
// dibelakangnya ada nilai awal default nilanya 0
// hasil dari pertambahan semua array angka
console.log(`ini hasil reduce : ${reduceAngka}`);

// Method chaining (berantai) pake titik
const chaining = angka
  // cari angka > 5
  .filter((a) => a > 20)
  // dikalikan dengan tiga
  .map((a) => a * 3)
  // jumlahkan
  .reduce((acc, cur) => acc + cur);
console.log(chaining);
