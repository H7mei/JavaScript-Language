//  pengulangan for
alert("mulai");
var x = prompt("berapa kali ");
for (var i = 1; i <= x; i++) {
  console.log("pengulangan ke : " + i);
}

// angkot case

// var y = 1;
// while (y <= 6) {
//   console.log("Angkot No. " + y + " beroprasi dengan baik.");
//   y++;
// }
// for (var x = 7; x <= 10; x++) {
//   console.log("Angkot No. " + x + " sedang tidak beroprasi.");
// }

// alert("Angkot yang beroprasi sebanyak : " + (y - 1));

// angkot case
var jmlAngkot = 15;
var angkotBeroprasi = 9;
var x = 1;

while (x <= angkotBeroprasi) {
  console.log("Angkot No. " + x + " beroprasi dengan baik.");
  x++;
}
for (x = angkotBeroprasi + 1; x <= jmlAngkot; x++) {
  console.log("Angkot No. " + x + " sedang tidak beroprasi.");
}

alert("selesai");
