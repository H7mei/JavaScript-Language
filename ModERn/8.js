// Tagged Templates
const nama = `hanafichoi`;
const umur = `18`;

// argument rest parameter (menampung semua yang ada di template
// literalsnya)
function func(str, ...args) {
  //   let hasil = ``;
  //   pengulangan untuk menampilkam semua tagged template
  //   str.forEach((a, i) => {
  //     hasil += `${a}${args[i] || ""}`;
  //   });
  //   return hasil;

  // pake reduceAngka
  return str.reduce((acc, curr, i) => `${acc}${curr}${args[i] || ``}`, ``);
}

// tagged themplate tinggal tambahin function di depan
// themplete literal nya
const tagged = func`Halo, nama saya ${nama}, saya berumur ${umur}`;
console.log(tagged);

// latihan hightlight
const email = `hanafichoirulloh1@gmail.com`;

function hightlight(str, ...args) {
  return str.reduce((acc, curr, i) => `${acc}${curr}<a class="hl">${args[i] || ``}</a>`, ``);
}

const lat = hightlight`Halo, nama saya ${nama}, saya berumur ${umur} dan email saya ${email}`;
// console.log(lat);

document.body.style.backgroundColor = "#FFFFFF";
document.body.innerHTML = lat;

// more

// escaping html (sanitasi) dari yang tidak di inginkan
// translating
// style component
