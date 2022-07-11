// declaration vs expresion

// declaration
tampil("hola");

function tampil(a) {
  console.log("halo " + a);
}

tampil("hanafi");

// bebas mau di atas apa di bawah karna memiliki konsep
// hoisting

// expresion
var nama = function (nama) {
  console.log("nama kamu " + nama);
};

nama("holaa");
