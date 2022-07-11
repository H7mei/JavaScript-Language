// Cara untuk membuat Object pada javascript

// 1. Object Literal
// kalo object literal kalo nama variabelnya sama ga bisa
// kalo mau bikin banyak di bikin satu satu
// PROBLEM : tidak efektif kali untuk object yang banyak
let Mhs1 = {
  nama: "hanafichoi",
  nim: "21320076",
  energy: 10,
  // metodh
  makan: function (porsi) {
    // keyword bernama this (parentnya)
    this.energy = this.energy + porsi;
    console.log(`Holaa ${this.nama}, selamat makan!`);
  },
};
// yang ke dua
let Mhs2 = {
  nama: "hanafichoi",
  nim: "21320076",
  energy: 10,
  // metodh
  makan: function (porsi) {
    // keyword bernama this (parentnya)
    this.energy = this.energy + porsi;
    console.log(`Holaa ${this.nama}, selamat makan!`);
  },
};

// 2. Function Declaration
// tidak perlu membuat duplicate pada objectnya
// Kelemahanya kalo ada Function baru harus di bikin juga solusinya pake object.create

// mthoth nya di pisah
const Metot = {
  // metodtnya
  Up: function (Lvl) {
    this.energy += Lvl;
    console.log(`Halo Player ${this.id}, power UP!!`);
  },
  Hurt: function (Num) {
    this.energy -= Num;
    console.log(`${this.energy}, energy`);
    if (this.energy < 0) {
      console.log(`Player ${this.id}, Die!!`);
    }
  },
  Tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`Selamat Tidur ${this.id}`);
  },
};

function Swa(id, energy, state) {
  // menggunakan object.create
  let Swa = Object.create(Metot);

  // deklarasikan membikin object
  // let Swa = {};
  Swa.id = id;
  Swa.energy = energy;
  Swa.state = state;

  // memanggil method yang terpisah
  // Swa.Up = Metot.Up;
  // Swa.Hurt = Metot.Hurt;
  // Swa.Tidur = Metot.Tidur;

  // kalo pake Function Declaration Harus return
  return Swa;
}
// harus instansiasi
let H7mei = Swa("123", 90, "INdonesia");
let Wolf = Swa("231", 86, "NortCaroline");

// 3. Constructor fuction
// Keyword New
// Memudahkan kalau membuat prototy sama kalo make objec.react
// Paling sering digunakan dan mirip dengan Function Declaration
// pake this(parent)
function XBor(id, energy, state) {
  // deklarasikan membikin object
  // let XBor = {}; Tidak perlu dituliskan
  this.id = id;
  this.energy = energy;
  this.state = state;
  // metodtnya
  this.Up = function (Lvl) {
    this.energy += Lvl;
    console.log(`Halo Player ${this.id}, power UP!!`);
  };
  this.Hurt = function (Num) {
    this.energy -= Num;
    if (this.energy < 0) {
      console.log(`Player ${this.id}, Die!!`);
      this.energy = 0;
    } else {
      console.log(`Player ${this.id}, You have ${this.energy}`);
    }
  };

  // return XBor; Tidak Pake Return
  // Udah secara otomatis dilakukan javascriptnya
}
// harus instansiasi
// wajib pake new kalo Construction Function
let Nana = new XBor("123", 90, "INdonesia");
let Mona = new XBor("231", 86, "NortCaroline");

// 4. object.create

// versi prototype
function Ops(nama, Life, state, money) {
  // Dibelakang layar
  // let this = Object.create(Ops.prototype);

  this.nama = nama;
  this.Life = Life;
  this.state = state;
  this.money = money;
}
// cara bikin metothnya mengacu pada object.create yang
// telah di buat secara default oleh javasricpt
Ops.prototype.Hoki = function (live) {
  this.Life += live;
  // mengunakan return bisa
  // console.log(`Your live ${this.Life}`);
  return `Your live ${this.Life}`;
};

Ops.prototype.Cuan = function (cuan) {
  this.money += cuan * 3;
  return `Your money ${this.money}`;
};

let hanafichoi = new Ops("hanafichoi", 100, "inDonesia", 1000);

// versi class
// class ini belakang layarnya yang di atas
class Cls {
  // bikin properti
  constructor(name, money) {
    this.name = name;
    this.money = money;
  }

  // ini metothnya
  cuan(uang) {
    this.money += uang;
    return `uang kamu tersisa ${this.money}`;
  }
}
// panggilnya
let Taipan = new Cls("hanafichoi", 1000);

// contoh
let angka = [1, 2, 3];
// dibelakanglayarnya terjadi banyak metodh
// ada yang terjadi di belakang layar
// jadi kita dapat mengguanakan metodh yang ada di prototypenay

// let angka = new Array();

// function Array(){
//   let this = Object.create(Array.prototype);
// }
