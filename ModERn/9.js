// Destructuring
// assingtment
// Array
const coba = [`satu`, `dua`, `tiga`];

// skip items
const [a, , c] = coba;
// console.log(a); // satu
// // console.log(b); // dua
// console.log(c); // tiga

// object
// object literal
const mhs = {
  nama: `hanafichoi`,
  umur: 18,
  email: "hanafichoi@gmail.com",
  nilai: {
    tugas: 99,
    uts: 100,
    uas: 98,
  },
};
// kalo object simpenya pake {}
const { nama, umur, email } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// assingment tanpa deklarasi object
({ na, um, em } = {
  na: `hanafichoi`,
  um: 18,
  em: "hanafichoi@gmail.com",
});
// console.log(em);

// assign ke variabel baru
const mhs2 = {
  nama: `hanafichoi`,
  umur: 18,
  email: "hanafichoi@gmail.com",
};
// ini gantinya pake titik dua
const { nama: n, umur: u, email: e } = mhs;
// console.log(`ganti variabel ${n}`);

// memberikan defaul value
const game = {
  //   hi: `hillo hil`,
};
// pake ini nilai default
const { hi: o = "lets go to the good part", ho = `default value` } = game;
console.log(o);
// console.log(ho);

// swap items
let x = 1;
let z = 2;

// console.log(`before ${z} ${x}`);
// swaping
[x, z] = [x, z];

// console.log(`after  ${x} ${z}`);

// return value pada function
function get() {
  return [1, 2];
}
const [q, w] = get();
// console.log(`${q} ${w}`);

// rest parameter (titik tiga) (jadi array sisanya)
const [p, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`normal ${p}`);
// console.log(`rest paramerte ${rest}`);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mahasiswa = {
  id: `12345`,
  nama: `hanafichoi`,
  umur: 18,
  email: "hanafichoi@gmail.com",
};

function getId({ id, nama, email }) {
  return id;
}

// console.log(getId(mahasiswa));

// function distruction

// urutan berpengaruh
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b, a / b, a - b];
}

// skip (kosongin)
const [plus, , bagi, kurang, k = `tidak ada`] = penjumlahanPerkalian(3, 5);
console.log(`plus : ${plus}
bagi : ${bagi}
kurang: ${kurang}`);

// console.log(k);

// solution
// jadiin object
// kalo jadi object urutan tidak berpengaruh
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kureng: a - b,
    xali: a * b,
    div: a / b,
  };
}
const { div, xali, tambah, kureng } = kalkulasi(10, 19);
console.log(div);

// destruction function arguments
//                                                                  nested
function cetakMhs({ nama: n, email: e, umur = "umur belum di imput", nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${n} email saya ${e} umur saya ${umur}, rata rata nilai : ${(tugas + uts + uas) / 3}`;
}
console.log(cetakMhs(mhs));
