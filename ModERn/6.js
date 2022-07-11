// ambil semua element vidio
// node list itu bukan array
// di ubah ke array
const video = Array.from(document.querySelectorAll("[data-durations]"));

// pilih hanya yang "javasript"
// memfilter dengan mengunakan textContent lalu
// include yang ada di dalamnya
let js = video
  .filter((video) => video.textContent.includes("JavaScript"))

  // Ambil durasi masing masing
  .map((item) => item.dataset.durations)

  // ubah durasi menjadi int, ke detik
  .map((waktu) => {
    // 10:30 -> [10, 30] ini di split
    const part = waktu.split(":").map((part) => parseInt(part));
    return part[0] * 60 + part[1];
  })
  // jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);
// ubah ke jam menit detik
// pembulatan ke bawah
const jam = Math.floor(js / 3600);
js = js - jam * 3600;
const menit = Math.floor(js / 60);
const detik = js - menit * 60;

// simpan di DOM
const pWaktu = document.querySelector(".Total-Waktu");
// tambahin text
pWaktu.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
const pBanyak = document.querySelector(".jumlah-JS");
const jmlVid = video.filter((video) => video.textContent.includes("JavaScript")).length;
pBanyak.textContent = `${jmlVid} vidio`;

const h1 = document.getElementsByTagName("h2")[1];
h1.innerHTML = "JavaScript";
