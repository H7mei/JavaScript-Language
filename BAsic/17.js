// // manipulasi Array

// // 1. menambah isi array
// var arr = [];
// arr[0] = "hanafi";
// arr[1] = "choi";
// arr[2] = "han";

// console.log(arr);

// // 2. menghapus isi array
// var ars = ["haan", "han", "choi", "han"];
// ars[0] = undefined;
// console.log(ars);

// // 3. menampilakan isi array
// var ark = ["haan", "han", "choi", "han", "budi", "koma"];

// for (var i = 0; i < ark.length; i++) {
//   console.log("indek ke " + (i + 1) + " " + ark[i]);
// }

// // method pada array
// // 1.join
var jin = ["@", "han", "choi", "han"];
// console.log(jin.join(""));

// // 2. push (menambah di akhir)
// jin.push("kira", "joma", "alek bijer");
// console.log(jin.join("-"));
// // 3. pop (menhapus)
// jin.pop();
// jin.pop();
// console.log(jin.join("-"));

// // 4. unshif (bekerja unutk elemen pertama) (menambah)
jin.unshift("hanafi");
console.log(jin.join("-"));
// // 5. shif menghilanhkan
// jin.shift();
// jin.shift();
// jin.shift();
// console.log(jin.join("-"));

// // 6. splice (menyisipkan elemen array di tengah)
// // splice(indexAwal, maDihapusBerapa, elemenBaru, elemenBaru2, ....)
// jin.splice(2, 1, "TEngah", "baru", "kontra");
// console.log(jin.join("-"));
// // 7. slice
// // slice(awal, akhir)
// var xin = ["kira", "joma", "alek bijer", "katak bijer"];
// var volk = xin.slice(1, 3);
// console.log(volk.join("-"));
// console.log(xin.join("-"));

// // 8. forEach
// var angka = [1, 2, 5, 12, 35, 6, 72, 1, 9];
// // for (var i = 0; i < angka.length; i++) {
// //   console.log(angka[i]);
// // }
// angka.forEach(function (e) {
//   console.log(e);
// });
// var nama = ["haan", "han", "choi", "han"];
// nama.forEach(function (n, i) {
//   console.log("nama kamu " + n + " urutan ke " + (i + 1));
// });
// // 9.map
// // mengembalikan return
// var angka2 = angka.map(function (v) {
//   return v * 2;
// });
// console.log(angka2.join("-"));

// // 10.sort
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join("-"));

// // 11. filter (banyak nilai)
// var filt = angka.filter(function (r) {
//   return r > 20;
// });
// console.log(filt.join("-"));
// // 12. find (satu nilai)
// var fit = angka.find(function (l) {
//   return l > 20;
// });
// console.log(fit);

// // lebihbanyak lagi search di google metoth di js
