// this
var a = 10;
console.log(this.a);

// cara 1 - function declaration
function halo() {
  console.log(this.a);
  console.log("halo");
}
halo();

// cara 2 - object literal
var obj = {
  a: 10,
  nama: "hanafichoi",
};
obj.hola = function () {
  console.log(this.nama);
  console.log("hola");
};
obj.hola();

// cara 3 - constructor
function hihi(nama) {
  this.nama = nama;
  console.log(this.nama);
}
var obj1 = new hihi("hokman");
var obj2 = new hihi("junaedi");
// this mengembalikan object yang baru dibuat
