// Pengkondisian
// case angkot
var bA = 10,
  c,
  No = 4,
  x = 1;
c = bA - No;
for (var i = 1; i <= bA; i++) {
  if (i <= c) {
    console.log("Angkot No. " + i + " beroprasi dengan baik");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroprasi");
  }
}

// case angkot 2
// var jmlAngkot = 10,
//   angkotBeroprasi = 4;

// for (var i = 1; i <= jmlAngkot; i++) {
//   if (i <= 6) {
//     console.log("Angkot No. " + i + " beroprasi dengan baik");
//   } else {
//     console.log("Angkot No. " + i + " sedang tidak beroprasi");
//   }
// }

// else if
var angka = prompt("masukkan angka:");

if (angka % 2 == 0) {
  alert(angka + "adalah bilangan GENAP");
} else if (angka % 2 == 1) {
  alert(angka + "adalah bilangan GANJIL");
} else {
  alert("input tidak di kenal!!");
}

// case angkot
var beroprasi = 10,
  rusak = 8,
  lembur = 8,
  c;
c = beroprasi - rusak;
for (var i = 1; i <= beroprasi; i++) {
  if (i <= c) {
    console.log("Angkot No. " + i + " beroprasi dengan baik");
  } else if (i == lembur) {
    console.log("Angkot No. " + i + " sedang lembur.");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroprasi");
  }
}

// case angkot 2
var jmlAngkot = 10,
  angkotBeroprasi = 4;

for (var i = 1; i <= jmlAngkot; i++) {
  if (i <= 6) {
    console.log("Angkot No. " + i + " beroprasi dengan baik");
  } else if (i == 8) {
    console.log("Angkot No. " + i + " sedang lembur.");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroprasi");
  }
}

alert("Makasi");
