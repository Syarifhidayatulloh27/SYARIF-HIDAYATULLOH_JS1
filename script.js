// Contoh javascript penggunaan if, else, dan nested if
var cuaca = 'cerah';
var suhu = 29;

if (cuaca === 'cerah') {
  if (suhu > 25) {
    console.log('Hari ini cerah dan panas.');
  } else {
    console.log('Hari ini cerah tetapi tidak terlalu panas.');
  }
} else if (cuaca === 'hujan') {
  if (suhu < 24) console.log('Hari ini hujan, jangan lupa membawa payung.');
} else {
  console.log('Kondisi cuaca tidak dikenali.');
}

// Contoh javascript penggunaan switch case
var hari = 'Kamis';

switch (hari) {
  case 'Senin':
    console.log('Hari Senin');
    break;
  case 'Selasa':
    console.log('Hari Selasa');
    break;
  case 'Rabu':
    console.log('Hari Rabu');
    break;
  case 'Kamis':
    console.log('Hari Kamis');
    break;
  default:
    console.log('Hari lainnya');
}

// Contoh javascript penggunaan for statement
for (var i = 1; i <= 15; i++) {
  console.log('Urutan Antrian-' + i);
}

// Contoh javascript penggunaan while
let jumlahKeramik = 35;
let ukuranKeramik = 25;

while (ukuranKeramik <= jumlahKeramik) {
  console.log('Keramik ' + ukuranKeramik + ' sedang dikirim');
  ukuranKeramik++;
}

// Contoh javascript penggunaan do while
var bilanganY = 2;

do {
  console.log('Menampilkan bilangan: ' + bilanganY);
  bilanganY++;
} while (bilanganY <= 5);

// Contoh javascript penggunaan fungsi (function)

// Mendefinisikan sebuah fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  var luas = (alas * tinggi) / 2;
  return luas;
}

// menghitung luas segitiga
var alasSegitiga = 8;
var tinggiSegitiga = 6;

var luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);

// Menampilkan hasil perhitungan luas segitiga menggunakan console.log
console.log('Luas segitiga: ' + luasSegitiga);
