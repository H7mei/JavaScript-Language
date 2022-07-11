const judul = document.getElementById("judul");
judul.innerHTML = "hanafichoi";
judul.style.textAlign = "center";
judul.style.fontSize = "100px";
judul.style.textShadow = "1px 1px 3px rgba(0,0,0,1)";
judul.style.backgroundColor = "rgba(242,232,12,1)";

// nambahin aribut
// namanya ama isinya
judul.setAttribute("class", "hanafichoi");

const a = document.querySelector("a");
a.removeAttribute("href");

const p2 = document.querySelector(".p2");

const tmlb = document.querySelector(".btn");

function ubahWarna() {
  // apabila ada hapus apabila ga ada isi
  document.body.classList.toggle("label");
}
tmlb.addEventListener("click", function () {
  tmlb.innerHTML = "light<>";
});

// .item
// .containts
// .replace

// ======== Node Manipulation =========
// buat element baru
const pBru = document.createElement("p");
const textBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan keparagraf
pBru.appendChild(textBaru);
// simpan pBru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBru);

// bikin
const liBaru = document.createElement("li");
const textli = document.createTextNode("item BRAy");
// masuukan
liBaru.appendChild(textli);
// simpan
const ul = document.querySelector("ul");
const li2 = document.querySelector("ul li:nth-child(2)");
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];
// mrnghapus
sectionA.removeChild(link);

// memindahkan
const Sb = document.getElementById("b");
const pv4 = Sb.querySelector("p");

const h2Baru = document.createElement("h2");
const el = document.createTextNode("Judul Baru!!");

h2Baru.appendChild(el);

Sb.replaceChild(h2Baru, pv4);

pBru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";

// DOM events
function oxudul() {
  h2Baru.innerHTML = "you got it";
}
h2Baru.onclick = oxudul;

const itm1 = document.querySelector("#b li:nth-child(1)");
itm1.addEventListener("click", function () {
  // tangkap
  const ul = document.querySelector("#b ul");
  // bikin
  const liBaru = document.createElement("li");
  const teax = document.createTextNode("item Baru");
  // masukkan
  liBaru.appendChild(teax);
  // tampilkan
  ul.appendChild(liBaru);
});
