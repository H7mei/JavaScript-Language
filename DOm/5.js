// const Tombol = document.querySelector(".close");
// const card = document.querySelector(".card");

// Tombol.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Transfersal
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
// close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     // cegah aksi defaulf (link)
//     e.preventDefault();
//     // stop pengelembungan
//     e.stopPropagation();
//   });
// });

// const card = document.querySelectorAll(".card");
// card.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });

// event Bubling

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.classList == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
