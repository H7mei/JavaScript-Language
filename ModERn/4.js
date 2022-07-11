// FUnction Expression
// const tampilNama = function(nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Fun"));

// Arrow Function
// satu masukan
// kalo satu bisa ga pake kurung
// bisa ga pake returnnya (implisit return)
// bisa ga pake kurung kurawal
let tampilNama = (nama) => `Halo, ${nama}`;

// kalo gada parameternya
let test = () => `Halo`;

console.log(tampilNama("hanafichoi"));
console.log(test());

// dua
let Day = (hari, tanggal) => {
  return `Selamat ${hari} Tanggal ${tanggal} Januari`;
};

console.log(Day("Sabtu", 7));

// function map
//  untuk memetakan sebuah function ke array
let Mhs2 = ["Hana", "fichoi", "folsas"];

// expresion biasa
// let Jumlah = Mhs2.map(function (nama) {
//   return nama.length;
// });

// console.log(Jumlah);

// Arrow function
let Jumlah = Mhs2.map((nama) => nama.length);
// pengembalian nya array
console.log(Jumlah);
// supaya di anggap object bukan return tambahin kurung
let Jumlah2 = Mhs2.map((nama) => ({
  // gaperlu di tulis dua duanya satu cukupp
  nama,
  jmlahHurud: nama.length,
}));
// biar rapi pake table
console.table(Jumlah2);

// Kossep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "hanafichoi";
//   this.jurusan = "Teknik Informatika";
//   this.SayHello = function () {
//     return `Hallo ${this.nama} dari jurusan ${this.jurusan}`;
//   };
// };
// const M = new Mahasiswa();

// Arrow Functionya
// ga bisa asal aja functionya di ganti
const Mahasiswa = function () {
  this.nama = "hanafichoi";
  this.jurusan = "Teknik Informatika";
  this.SayHello = () => {
    return `Hallo ${this.nama} dari jurusan ${this.jurusan}`;
  };
};
const M = new Mahasiswa();

// contoh
const Mahasiswa2 = function () {
  this.nama = "hanafichoi";
  this.jurusan = "Teknik Informatika";
  this.umur = 18;
  this.SayHello = function () {
    return `Hallo ${this.nama} dari jurusan ${this.jurusan}`;
  };
  //   artinya jalankan fungsi function ini dalam 1/2 detik
  setInterval(() => {
    // thisnya mengacu ke global variabel bukan ke parentnya
    // solusinya ganti ke arrow function
    console.log(this.umur++);
    // ini waktunya detik
  }, 50000);
};
const M2 = new Mahasiswa2();

//   Object Literal
const jomas = {
  nama: "hanafichoi",
  umur: 18,
  //   kalo di pakein arrow function thisnya ke windows
  Sayhello: function () {
    return `Hallo ${this.nama} ber umur ${this.umur}`;
  },
};

// real case example arrow function
const og = document.querySelector(".og");
const h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  og.classList.toggle("box");
  og.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";

    if (this.classList.contains(satu)) {
      //   script javasript terbaru
      [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    // menggunakan arrow function
    setTimeout(() => {
      this.classList.toggle(dua);
    }, 600);
  });
});
