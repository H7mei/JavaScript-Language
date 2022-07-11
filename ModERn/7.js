// Themplate Literal / string literal
// string biasa titik dua atau titik 1
// kalo mau pake themplate literal pake back tik

// tag `string text ${expresion}
//  string text`;

const mhs = {
  nama: `hanafichoi`,
  umur: 18,
  // Nested
  mataKuliah: [`Artificial Inteligent`, `Syber Scurity`, `Analis Programing`, `Perancangan sistem Berbasis Object`, `Expert Calculus`],
};

function umur() {
  return 1 + 17;
}

//  html frangmets
// white space tidak tiperdulikan
let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="umur">${mhs.umur}</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto.</p>
</div>`;

// console.log(el);

// Embedded Expression
console.log(`Halo nama saya ${mhs.nama} umur saya ${umur()} tahun.`);
// thnary operator
console.log(`function nya ${umur() == mhs.umur ? "sama" : "kaga"}`);

// Expresion Interpolation
console.log(`hasil penjumlahan umur dengan angka 10 = ${mhs.umur + 10}`);

// Latihan
// HTML Fragments
const lat = `<div class="mhs">
  <h2>${mhs.nama}<h2>
  <h6 class="umur">${umur()} umur</h6>
</div>`;

document.body.style.backgroundColor = "white";
// document.body.innerHTML = lat;

// 2.looping
const ms = [
  {
    nama: `hanafichoi`,
    email: `hanfichoirulloh1@gmail.com`,
  },
  {
    nama: `pak sandika`,
    email: `sandikagalih@unpas.com`,
  },
  {
    nama: `park-kom`,
    email: `parkkom@gmail.com`,
  },
];

const lop = `<div class="mhs">
  ${ms
    .map(
      (a) => `<ul>
    <li>${a.nama}</li>
    <li>${a.email}</li>
  </ul>`
    )
    .join("")}
</div>`;

// document.body.innerHTML = lop;

// 3. conditionals
// tenry
const lagu = {
  judul: `Tetap Dalam Jiwa`,
  penyanyi: `Insyana Sarasvati`,
  feat: `Billie`,
};
// jika
const lps = `<div class="lagu">
 <ul>
    <li>${lagu.judul}</li>
    <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
 </ul>
</div>`;

// document.body.innerHTML = lps;

// 4. Nested
// HTML Fragments bersarang
// looping
function cetak(mataKuliah) {
  return `
  <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>
  `;
}

const nest = `<div class="lagu">
  <h2>${mhs.nama}</h2>
  <h4>Mata Kuliah</h4>
  ${cetak(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = nest;
