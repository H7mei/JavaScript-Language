var x = parseInt(prompt("angka keberuntungan : ")); // mengubah tipe data

switch (x) {
  case 764:
    alert("selamat kamu beruntung");
    break;
  default:
    alert("coba lagi");
    break;
}

var y = parseInt(prompt("angka 1-6 : ")); // mengubah tipe data

switch (y) {
  case 1:
    console.log("S A T U");
    break;
  case 2:
    console.log("D U A");
    break;
  case 3:
    console.log("T I G A");
    break;
  case 4:
    console.log("E M P A T");
    break;
  case 5:
    console.log("L I M A");
    break;
  case 6:
    console.log("E N A M");
    break;
  default:
    console.log("infinty");
    break;
}

var c = parseInt(prompt("1 - 6 : ")); // mengubah tipe data

switch (c) {
  case 1:
  case 2:
  case 3:
    console.log("TEAM A");
    break;
  case 4:
  case 5:
  case 6:
    console.log("TEAM B");
    break;
  default:
    console.log("infinty");
    break;
}
