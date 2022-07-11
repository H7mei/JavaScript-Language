// Lexical Scope
function init() {
  //   let nama = `hanafichoi`; // local variabel
  let umur = 18;

  //   anonimus function fungsi tanpa nama
  return function (nama) {
    // inner function (closure*)
    console.log(nama); // akses ke parent variabel (lexical scope)
    console.log(umur);
  };
  //   tampilNama();
  //   akan menampilkan objectnya
  //   console.dir(tampilNama);

  //   return tampilNama;
}

// init();

// di bikin variabel
// function factory
let Upname = init();
Upname("hanafichoi");

// Contoh
// kasus function factory
function ucapkanSalam(waktu) {
  return function (nama) {
    // closure
    console.log(`Halo ${nama}, Selamt ${waktu}, Hv Nice day`);
  };
}

// closure yang lexixcal scope nya variabelnya
// function yang sesuai dengan function lain
let Pagi = ucapkanSalam("Pagi");
let Siang = ucapkanSalam("Siang");
let Malam = ucapkanSalam("Malam");

Pagi("hanafichoi");

// contoh
// pembungkusan bernama imediatly invoke function
// saat di pasang di variabel add jadi langsung inner functionnya
let add = (function () {
  // private metotth
  let tekan = 0;
  return function () {
    // closure, InnerFunction
    return ++tekan;
  };
  //   pemanggilannya
})();

// let m = add();

console.log(add());
console.log(add());
console.log(add());
