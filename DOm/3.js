const tombol = document.querySelector("button");
tombol.addEventListener("click", function () {
  document.body.classList.toggle("red");
});

const kok = document.createElement("button");
const tekd = document.createTextNode("Acak Acak");

kok.appendChild(tekd);

kok.setAttribute("type", "button");
tombol.after(kok);

kok.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const Sred = document.querySelector("input[name=Sred]");
const Shijau = document.querySelector("input[name=Shijau]");
const Sbiru = document.querySelector("input[name=Sbiru]");

Sred.addEventListener("input", function () {
  const r = Sred.value;
  const g = Shijau.value;
  const b = Sbiru.value;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
Shijau.addEventListener("input", function () {
  const r = Sred.value;
  const g = Shijau.value;
  const b = Sbiru.value;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
Sbiru.addEventListener("input", function () {
  const r = Sred.value;
  const g = Shijau.value;
  const b = Sbiru.value;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientY);
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  console.log(xPos);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(yPos);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + "," + yPos + xPos + ")";
});
