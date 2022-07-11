document.body.addEventListener("mousemove", function (event) {
  const h1 = document.querySelector("h1");
  const span = document.querySelector("span");
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  // console.log(xPos);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  // console.log(yPos);

  h1.style.color = "rgb(" + xPos + "," + yPos + "," + yPos + xPos + ")";
  span.style.color = "rgb(" + xPos + "," + xPos + "," + yPos + ")";
});

const span = document.querySelector("span");
const huruf = [...span.textContent].map((m) => `<span>${m}</span>`).join("");
span.innerHTML = huruf;
