// DoM Selection
// getElementById --> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.textAlign = "center";
judul.style.backgroundColor = "black";
judul.style.textShadow = "1px 1px 2px white";
judul.innerHTML = "hanafichoi";

// document.getElementsByTagName()
// --> HTMLCollections
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}
p[4].style.backgroundColor = "white";

p[4].style.color = "green";
p[4].style.fontSize = "50px";
p[4].style.textAlign = "center";
p[4].style.backgroundColor = "black";
p[4].style.textShadow = "1px 1px 2px white";
p[4].innerHTML = "haan";

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "100px";

// document.getElementsByClassName()
// --> HTMLCollections
const pom = document.getElementsByClassName("pom")[0];
pom.innerHTML = "Teknik Informatika";

// document.querySelector() --> element
const pd2 = document.querySelector("#b ul");
pd2.style.color = "green";
pd2.style.fontSize = "30px";

const pd3 = document.querySelector("#b ul li:nth-child(2)");
pd3.style.backgroundColor = "orange";
pd3.innerHTML = "Sort";

// document.querySelectorAll() --> NodeList
const Asl = document.querySelectorAll("p");
Asl[2].style.backgroundColor = "blue";

// node root
const SectionB = document.querySelector("#b");
const opl = SectionB.querySelectorAll("ul li:nth-child(3)")[0];
opl.style.backgroundColor = "red";
const op2l = SectionB.querySelectorAll("ul li:nth-child(1)")[0];
op2l.style.backgroundColor = "yellow";
