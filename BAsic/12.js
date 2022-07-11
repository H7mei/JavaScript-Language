// function Parameter dan Argumen
//              parameter
function tambah(a, b) {
  return a + b;
}
function kali(x, z) {
  return x * z;
}
//              Argument
console.log(tambah(2, 3));

var a = parseInt(prompt("masukkan angka 1 "));
var b = parseInt(prompt("masukkan angka 2 "));
// bisa lakukan operasi matermatika
console.log(tambah(a * 2, b * 2));
// bisa nested function
console.log(kali(tambah(a - 3, b - 2), tambah(a * 2, b + 5)));

// sudo variables
function tambah() {
  return arguments;
}
var coba = tambah("hola", 1, 2, 3, false, "my-world");
console.log(coba);

// contoh
function TMbah() {
  var hasil = 0;
  // panjang dari argument
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var cOBa = TMbah(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("volk " + cOBa);
