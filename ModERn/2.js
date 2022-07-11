// Execution Context, Hoisting and scope

console.log(nama);
var nama = "hanafichoi";

// creation phasse pada global Context <>1<>
// yang pertama kali dicari
// nama var = undifined,
// nama function =fn ()
// konsep ini bernama Hoisting

// window = global object
// this = window

// execution phase <>2<>

var name = "hanafichoi";
var umur = 33;

console.log(Say());

function Say() {
  return `Halo, nama saya ${name}, saya ${umur}, tahun.`;
}

// kalo udah jadi function ia membuat
// function membuat local execution conext (yang tejadi di belakang layar)
// yang di dalamanya terdapat creation dan execution phase juga ()
// bisa akses window atau
// arguments,
// hoisting

// scope kalo gada dari yang terdekat ia nyari atasnya

var ig = ["@", "hanafichoi"];

function Whois(ig) {
  console.log(arguments[0]);
  var url = "http://instagram.com/";
  var final = url + ig.pop();
  return final;
}

console.log(Whois(ig));

// Tumpukan Eksekusi
function a() {
  console.log(`ini a`);
  function b() {
    console.log(`ini b`);
    function c() {
      console.log(`ini c`);
    }
    c();
  }
  b();
}
a();

// Latihan 1
function satu() {
  var nama = "hanafichoi";
  console.log(nama);
}

function dua() {
  console.log(arguments);
  console.log(nama);
}

console.log(nama);
var nama = "joma";
satu();
// masuk argument di abaikan
dua("dood");
console.log(nama);

// https://pythontutor.com/javascript.html#mode=edit javasriptvisualizer
