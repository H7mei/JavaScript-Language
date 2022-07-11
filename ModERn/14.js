// ajax mengunakan library
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=16bab44a&s=avengers",
//   success: (movies) => console.log(movies),
// });

// ajax versi vanila js
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=16bab44a&s=avengers");
// xhr.send();

// fungsi dari javascript terbaru
// fetch => promise
// fetch(`http://www.omdbapi.com/?apikey=16bab44a&s=avengers`)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event
// yang Asynchrums yang akan yang terjadi di masa yang akan datang ke
// janji (terpenuhi / ingkar)
// state (fulfilled / rejected / pending)
// callback (resolved / rejected / finally)
// aksi (then / catch)

// contoh promise
let ditepati = true;
const janji = new Promise((resolved, rejected) => {
  if (ditepati) {
    resolved(`janji telah ditepati!`);
  } else {
    rejected(`ingkar janji`);
  }
});

janji.then((response) => console.log(`OK : ` + response)).catch((response) => console.log(`NOt OK : ` + response));

// contoh2 promise
let ditepat = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepat) {
    setTimeout(() => {
      resolve(`Ditepati setelah beberapa waktu`);
    }, 2000);
  } else {
    setTimeout(() => {
      resolve(`Ditepati setelah beberapa waktu`);
    }, 2000);
  }
});

console.log(`mulai`);
// console.log(janji2.then(() => console.log(janji2)));
janji2
  .finally(() => console.log(`selesai menunggu!`))
  .then((response) => console.log(`OK : ` + response))
  .catch((response) => console.log(`NOt OK : ` + response));
console.log(`selesai`);

// Promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: `American Pie`,
        sutradara: `Jony sans`,
        pemeran: `Mi Sun Sin`,
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: `payakumbuh`,
        temo: 22,
        kondisi: `Cerah banget`,
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca])
  // ini satu jadinya
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film[0].sutradara);
    console.log(cuaca);
  });
