// latihan permainan tebak angka
var lagi = true;

while (lagi) {
  alert("Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.");

  var comp = Math.round(Math.random() * 10);
  console.log(comp);
  var hasil = "";

  for (var i = 3; i > 0; i--) {
    var p = prompt("Masukkan Angka tebakan!");

    j = i - 1;

    if (p == "") {
      alert("Yang anda masukkan bukan angka");

      i = 0;
    } else if (p == null) {
      i = 0;
    } else {
      if (p == comp) {
        alert("Anda BENAR!\nAngka yang dicari adalah " + comp);

        i = 0;
      } else if (p < comp) {
        if (j == 0) {
          alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
        } else {
          alert("Terlalu RENDAH!\nAyo masih ada " + j + " kesempatan");
        }
      } else if (p > comp) {
        if (j == 0) {
          alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
        } else {
          alert("Terlalu TINGGI!\nAyo masih ada " + j + " kesempatan");
        }
      } else {
        alert("Yang anda masukkan bukan angka");

        i = 0;
      }
    }
  }

  lagi = confirm("Main lagi?");
}

alert("Terima kasih.");
