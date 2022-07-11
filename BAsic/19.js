// object

// Object Literal
var mahasiswa = {
  nama: "hanafichoi",
  umur: 18,
  lulus: true,
  jurusan: "Teknik Informatika",
  IPSemester: [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0],
  IPKumulatif: function () {
    var total = 0;
    var ipk = this.IPSemester;
    for (var i = 0; i < ipk.length; i++) {
      total += ipk[i];
    }
    return total / ipk.length;
  },
  alamat: {
    jalan: "JL. abc No. 123",
    kota: "jakarta",
    provinsi: "jawa Barat",
  },
};
console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.IPKumulatif());
console.log(mahasiswa.alamat.kota);

// Function Declaration
function ObjMhs(nama, umur, lulus, jurusan) {
  var mhs = {};

  mhs.nama = nama;
  mhs.umur = umur;
  mhs.lulus = lulus;
  mhs.jurusan = jurusan;
  return mhs;
}

var mahasiswa2 = ObjMhs("Hanac", "19", true, "Database");
var mahasiswa3 = ObjMhs("Barbarian", "21", false, "construction");
console.log(mahasiswa2.nama);
console.log(mahasiswa2.umur);
console.log(mahasiswa2.jurusan);
console.log(mahasiswa3.nama);
console.log(mahasiswa3.umur);
console.log(mahasiswa3.jurusan);

// Constructor
function MahaSiswa(nama, umur, lulus, jurusan) {
  // var this = {};
  this.nama = nama;
  this.umur = umur;
  this.lulus = lulus;
  this.jurusan = jurusan;
  // return this;
}

var mhs4 = new MahaSiswa("Erik", "18", true, "Bisnis Digital");

console.log(mhs4.nama);
console.log(mhs4.jurusan);
