// Asynchrums JavaScript
// link penjelasan cara kerja V8
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// console.log(`satu`);
// setTimeout(() => {
//   console.log(`dua`);
// }, 0);
// console.log(`tiga`);

// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilNama(callback) {
//   const nama = prompt("Massukkan Nama : ");
//   callback(nama);
// }

// tampilNama((nama) => {
//   alert(`Halo, ${nama}`);
// });

// more examples
const mhs = [
  {
    nama: `hanafichoi`,
    nrp: `1203923`,
    email: `hanafichoirulloh1@gmail.com`,
    jurusan: `Teknik Informatika`,
    Id: 1,
  },
  {
    nama: `hanafichoi2`,
    nrp: `1203923`,
    email: `hanafichoirulloh1@gmail.com`,
    jurusan: `Teknik Informatika`,
    Id: 2,
  },
  {
    nama: `hanafichoi3`,
    nrp: `1203923`,
    email: `hanafichoirulloh1@gmail.com`,
    jurusan: `Teknik Informatika`,
    Id: 4,
  },
];

// console.log(`mulai`);
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let dat = new Date();
//   }
//   console.log(m.nama);
// });
// console.log(`selesai`);

// Asynchronous callback
// succse dan error adalah callback
// Ajax melalui vanila javascript
function datMahasiwa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open(`get`, url);
  xhr.send();
}

datMahasiwa(
  `mahasiswa.json`,
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(`${m.nama} Vanila`));
  },
  () => {
    alert("Eror");
  }
);

// JQuery
console.log(`mulai`);
$.ajax({
  url: `mahasiswa.json`,
  success: (mhs) => {
    mhs.forEach((m) => console.log(`${m.nama} JQery`));
  },
  error: (e) => {
    alert(e.responseText);
  },
});
console.log(`selesai`);
