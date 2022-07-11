// Spread Operator

// memecah iterables menjadi single elment
const mhs = [`hanafi`, `choi`, `hanafichoi`];
const dose = [`rumah`, `kamar`, `hutan`];
// console.log(...mhs[0]);

// menggabungkan 2 array (spread operator)
console.log(...mhs, `tambahan`, ...dose);

// use concate
// const concat = mhs.concat(dose);
// console.log(concat);

// meng-copy array
const mhs1 = [...mhs];
// kalo ini di ubah bisa tampa mengubah sumbernya
mhs1[0] = `tedda`;
console.log(mhs1);

// more examples
// const span = document.querySelector("span");

// const type = [];
// type.push(span.innerHTML);
// console.log(type[0]);

// map using maps
// const map = [...span].map((m) => m.textContent);
// console.log(map);

// using map untuk tiap tiap huruf
// const huruf = [...span.textContent].map((m) => `<span>${m}</span>`).join("");
// span.innerHTML = huruf;

// rest Parameters (sisa) bisanya di akhir
function myFunc(a, b, ...args) {
  // return `a = ${a}, b = ${b}, args = ${args}`;

  // ubah argments ke array
  // return Array.from(arguments);
  return [...arguments];
}

console.log(myFunc(1, 2, 3, 4));

function Jumlah(...angka) {
  //   let total = 0;
  //   for (const m of angka) {
  //     total += m;
  //   }
  //   return total;

  // reduce use
  return angka.reduce((acc, curr) => acc + curr);
}

console.log(Jumlah(1, 2, 4, 5));

// array destructuring
const kelompok = [`haa`, `boo`, `bee`, `zoo`, `too`];
const [ketua, wakil, ...angota] = kelompok;
console.log(ketua);

// object destructuring
const team = {
  PM: `hanafichoi`,
  FE1: `joma`,
  FE2: `jo mama`,
  BE: `hola`,
  Ux: `kola`,
  Dev: `ferrt`,
};

const { PM, ...args } = team;
console.log(PM);

// filtering
function filterBy(type, ...value) {
  return value.filter((v) => typeof v === `string` || typeof v === type);
}

console.log(filterBy(`number`, 12, 43, `haan`, false, 04, true, `dood`));
