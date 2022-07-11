// pembuatan function (declarating fuction)

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var totalVolume;

// volumeA = a * a * a;
// volumeB = b * b * b;

// totalVolume = volumeA + volumeB;

// alert(totalVolume);

// membuat fuction
// function jumlahVolumeDuaKubus(a, b) {
//   var hasil;
//   var volumeA;
//   var volumeB;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   hasil = volumeA + volumeB;

//   return hasil;
// }

// refactoring sederhana
function jumlahVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

var x = prompt("Enter A ");
var z = prompt("Enter B ");

// memanggil function
console.log(jumlahVolumeDuaKubus(x, z));
console.log(jumlahVolumeDuaKubus(8, 9));
console.log(jumlahVolumeDuaKubus(4, 23));
// alert(jumlahVolumeDuaKubus(8, 3));
