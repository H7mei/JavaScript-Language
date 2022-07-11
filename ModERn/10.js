// for...of
// array
const Mhs = [`hanafi`, `chairul`, `jakarta`];

// 1. perulangan biasa
// 2. for each
// Mhs.forEach((m) => console.log(m));
// i nya buat index
Mhs.forEach((m, i) => {
  //   console.log(`${i + 1}. ${m}`);
});

// 3. for..of
for (const m of Mhs) {
  //   console.log(m);
}
// buat index
for (const [i, m] of Mhs.entries()) {
  console.log(`${i + 1}. ${m}`);
}

// string
const nama = "hanafichoi";
for (const m of nama) {
  //   console.log(m);
}

// Nodelist
// const kak = document.querySelectorAll(`.kak`);

// for (const n of kak) {
//   n.style.color = "white";
// }
// arguments
function jumlahAngka() {
  // forEach gabisa
  // reduce gabisa
  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// for...in
const mhs = {
  nama: `hanafichoi`,
  umur: `30`,
  email: `hanafichoirulloh1@gmail.com`,
};
// ambil propetinya
// for (const m in mhs) {
//   console.log(m);
// }
// ambil isinua
for (const m in mhs) {
  console.log(mhs[m]);
}
