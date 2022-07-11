// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(`NaN`);
//   }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve(`Errere`);
      }, 2000);
    } else {
      reject(`lama`);
    }
  });
}

// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function cobaAsync() {
  // error handling
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
