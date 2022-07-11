// jurangan angkot
var ToAngkot = 10,
  bengkel = 2,
  lembur1 = 10,
  lembur2 = 8,
  c;
c = ToAngkot - bengkel - 2;

for (var i = 1; i <= ToAngkot; i++) {
  if (i == lembur1 || i == lembur2) {
    console.log("Angkot No. " + i + " sedang lembur.");
  } else if (i <= c) {
    console.log("Angkot No. " + i + " beroprasi dengan baik");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroprasi");
  }
}

// jurangan angkot webunpas
// var ToAngkot = 10,
//   bengkel = 2;

// for (var i = 1; i <= ToAngkot; i++) {
//   if (i <= 6) {
//     console.log("Angkot No. " + i + " beroprasi dengan baik");
//   } else if (i == 8 || i == 10) {
//     console.log("Angkot No. " + i + " sedang lembur.");
//   } else {
//     console.log("Angkot No. " + i + " sedang tidak beroprasi");
//   }
// }

// juragan angkot lanjutan
// var ToAngkot = 10,
//   bengkel = 2,
//   lembur1 = 10,
//   lembur2 = 8,
//   lembur3 = 4,
//   c;
// c = ToAngkot - bengkel - 2;

// for (var i = 1; i <= ToAngkot; i++) {
//   if (i <= c && i !== lembur1 && i !== lembur2 && i !== lembur3) {
//     console.log("Angkot No. " + i + " beroprasi dengan baik");
//   } else if (i == lembur1 || i == lembur2 || i == lembur3) {
//     console.log("Angkot No. " + i + " sedang lembur.");
//   } else {
//     console.log("Angkot No. " + i + " sedang tidak beroprasi");
//   }
// }

// jurangan angkot webunpas
var ToAngkot = 10,
  bengkel = 2;

for (var i = 1; i <= ToAngkot; i++) {
  if (i <= 6 && i !== 5) {
    console.log("Angkot No. " + i + " beroprasi dengan baik");
  } else if (i == 8 || i == 10 || i == 5) {
    console.log("Angkot No. " + i + " sedang lembur.");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroprasi");
  }
}
