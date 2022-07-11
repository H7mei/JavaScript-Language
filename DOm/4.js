// membangkit kan bilangan random
function getPilihanComputer() {
  var comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgCom = document.querySelector(".img-komputer");
  imgCom.setAttribute("src", "img/" + pilihanComputer + ".png");

  const inf = document.querySelector(".info");
  inf.innerHTML = hasil;
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgCom = document.querySelector(".img-komputer");
  imgCom.setAttribute("src", "img/" + pilihanComputer + ".png");

  const inf = document.querySelector(".info");
  inf.innerHTML = hasil;
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const imgCom = document.querySelector(".img-komputer");
  imgCom.setAttribute("src", "img/" + pilihanComputer + ".png");

  const inf = document.querySelector(".info");
  inf.innerHTML = hasil;
});
