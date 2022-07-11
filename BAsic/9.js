// memmbuat game suit
var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("pilih : gajah, semut, orang : ");

  // menangkap pilihan komputer
  // membangkitkan bilangan randoml
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp > 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // console.log(comp);

  var hasil = "";
  // peraturannya
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    //   if (comp == "gajah") {
    //     hasil = "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    //   if (comp == "orang") {
    //     hasil = "KALAH!";
    //   } else {
    //     hasil = "MENANG!";
    //   }
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "input yang di masukkan salah!!";
  }

  // tampilkan hasilnya
  alert("kamu memilih : " + p + "dan komputer memilih : " + comp + "\nMaka hasilnya : kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("Terima Kasih Telah Bermain ^-^");
