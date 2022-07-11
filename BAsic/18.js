// PROGRAM JURAGAN ANGKOT
// masuk
var pemumpang = [];
var tambahpenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (pemumpang.length == 0) {
    //   tambah penumpang di awal array
    pemumpang.push(namaPenumpang);
    // kembalian isi array & keluar
    return penumpang;
  } else {
    //   telusuri kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang di kursi kosong
        penumpang[i] = namaPenumpang;
        // kebalian isi array dan keluar dari fungsi
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalian isi array dan keluar dari fungsi
        return penumpang;
      }
    }
  }
};
// keluar
var hapusPenumpang = [];
var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkotnya masih kosong.");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }
  return penumpang;
};

// versi singkat

// masukin penumbang
// var penumpang = [];
// function tambahPenumpang(namaPenumpang) {
//   for (var i = 0; i < penumpang.length; i++) {
//     if (penumpang[i] == null) {
//       return penumpang.splice(i, 1, namaPenumpang);
//     }
//   }

//   return penumpang.push(namaPenumpang);
// }

// mengeluarkan penumpang
// var hapusPenumpang = [];
// function hapusPenumpang(namaPenumpang) {
//   var i = penumpang.indexOf(namaPenumpang);

//   if (penumpang[i] == null) {
//     return alert(`WARNING!!!\nNama "${namaPenumpang}" tidak ada didalam Angkot!!!`);
//   } else {
//     return penumpang.splice(i, 1, null);
//   }
// }
