
// # ============ Project Sederhana ============= #
//  ■□ ======== Membuat ATM Sederhana ======== □■

alert(`Selamat Datang Di ATM Sederhana !!`);

let username = 'abc';
let kataSandi = 123;
let uangAnda = 1000000;
let ulangi = true;

// Execution Phase
while (ulangi) {
  let masukanUsername = prompt('Masukan Username Anda : ');
  let masukanKataSandi = parseInt(prompt('Masukan Kata Sandi Anda (6 digit angka) : '));
  
  if (masukanUsername === username && masukanKataSandi === kataSandi) {
    // Pilih Option :
    // 1. Cek uang
    // 2. Nabung sekarang
    // 3. Tarik tunai
    // 4. Ganti username
    // 5. Ganti kata sandi
    
    let options = prompt(`Halo Mas Afif Ganteng, Selamat Datang Kembali Di ATM Anda!!
    
    Pilih Options Yang Ingin Anda Lakukan 
    [1 | 2 | 3 | 4 | 5] : 
    
    1. Cek Uang Saya 
    2. Nabung Sekarang
    3. Tarik Tunai
    4. Ganti Username
    5. Ganti Kata Sandi`);
    
    switch (options) {
      // 1. Cek Uang Saya
      case '1':
        alert (`Uang Anda Saat Ini = ${uangAnda}`);
        break;
      // 2. Nabung Sekarang
      case '2':
        let nabung = parseInt(prompt(`Uang Anda Saat Ini = ${uangAnda}, Lalu Anda Mau Nabung Berapa : `));
        uangAnda += nabung;
        alert (`Total Uang Anda Saat Ini = ${uangAnda}`);
        break;
      // 3. Tarik Tunai
      case '3':
        let tarik = parseInt(prompt(`Uang Saya Saat Ini = ${uangAnda}, Lalu Anda Mau Narik Uang Berapa : `));
        // Tolak penarikan jika melebihi uang anda
        if (tarik > uangAnda) {
          alert('Maaf Penarikan Tidak Boleh Melebihi Uang Anda Saat Ini !!');
          break;
        } else {
          uangAnda -= tarik;
          alert (`Total Uang Anda Saat Ini = ${uangAnda}`);
          break;
        }
      // 4. Ganti Username
      case '4':
        let cek_username = prompt('Masukan Username Anda Yang Lama : ');
        if (cek_username === username) {
          let username_baru = prompt('Masukan Username Baru : ');
          username = username_baru;
          alert('Ganti Username Sukses !!');
          break;
        } else {
          alert('Maaf Usermame Yang Anda Masukan Salah !!');
          break;
        }
      // 5. Ganti Kata Sandi
      case '5':
        let cek_kataSandi = parseInt(prompt('Masukan Kata Sandi Anda Yang Lama : '));
        if (cek_kataSandi === kataSandi) {
          let kataSandi_baru = parseInt(prompt('Masukan Kata Sandi Baru : '));
          kataSandi = kataSandi_baru;
          alert('Ganti Kata Sandi Sukses !!');
          break;
        } else {
          alert('Maaf Kata Sandi Yang Anda Masukan Salah');
          break;
        }
      // Selain Diatas (Input Salah)
      default:
        alert ('Maaf Input Yang Anda Masukan Tidak Ada, Silahkan Coba Lagi !!');
        break;
    }
  } else {
    alert('Maaf Username Atau Kata Sandi Yang Anda Masukan Salah !!');
  }
  ulangi = confirm('Apakah Anda Mau Coba Lagi ? ');
}





/* Coming Soon
1. Membuat ATM Baru
2. Transfer Uang Ke ATM Lain

*/

/* alur :
1. tampilkan selamat datang di bank sederhana
2. masuk atm saya | daftar atm baru (if | else if)
3. if masuk => jalankan while
4. else if daftar => function daftar_AtmBaru, keluar lalu ulangi no. 2
*/



/*
====== Transfer ======

const siswa = function (namaSiswa,uang) {
  this.namaSiswa = namaSiswa;
  this.uang = uang;
  siswa.prototype.transfer = function (jumlahTransfer) {
    this.uang -= (jumlahTransfer + 500);
    return 'Transfer Sukses !!'
  }
  siswa.prototype.terima = function (jumlahTransfer) {
    this.uang += jumlahTransfer;
    return `Berhasil Meneriman Transfer Senilai ${jumlahTransfer} rupiah`
  }
}
const afif = new siswa('afif',5000);
const rara = new siswa('rara',5000);

========= Alur Program ==========

const BuatATM = function (namaATM) {
  this.namaATM = namaATM;
  BuatATM.prototype.masuk = function () {
    alert(`Selamat Datang Di ATM Sederhana !!`);

    let username = 'abc';
    let kataSandi = 123;
    let uangAnda = 1000000;
    let ulangi = true;
    
    // Execution Phase
    while (ulangi) {
      let masukanUsername = prompt('Masukan Username Anda : ');
      let masukanKataSandi = parseInt(prompt('Masukan Kata Sandi Anda (6 digit angka) : '));
      
      if (masukanUsername === username && masukanKataSandi === kataSandi) {
        // Pilih Option :
        // 1. Cek uang
        // 2. Nabung sekarang
        // 3. Tarik tunai
        // 4. Ganti username
        // 5. Ganti kata sandi
        
        let options = prompt(`Halo Mas Afif Ganteng, Selamat Datang Kembali Di ATM Anda!!
        
        Pilih Options Yang Ingin Anda Lakukan 
        [1 | 2 | 3 | 4 | 5] : 
        
        1. Cek Uang Saya 
        2. Nabung Sekarang
        3. Tarik Tunai
        4. Ganti Username
        5. Ganti Kata Sandi`);
        
        switch (options) {
          // 1. Cek Uang Saya
          case '1':
            alert (`Uang Anda Saat Ini = ${uangAnda}`);
            break;
          // 2. Nabung Sekarang
          case '2':
            let nabung = parseInt(prompt(`Uang Anda Saat Ini = ${uangAnda}, Lalu Anda Mau Nabung Berapa : `));
            uangAnda += nabung;
            alert (`Total Uang Anda Saat Ini = ${uangAnda}`);
            break;
          // 3. Tarik Tunai
          case '3':
            let tarik = parseInt(prompt(`Uang Saya Saat Ini = ${uangAnda}, Lalu Anda Mau Narik Uang Berapa : `));
            // Tolak penarikan jika melebihi uang anda
            if (tarik > uangAnda) {
              alert('Maaf Penarikan Tidak Boleh Melebihi Uang Anda Saat Ini !!');
              break;
            } else {
              uangAnda -= tarik;
              alert (`Total Uang Anda Saat Ini = ${uangAnda}`);
              break;
            }
          // 4. Ganti Username
          case '4':
            let cek_username = prompt('Masukan Username Anda Yang Lama : ');
            if (cek_username === username) {
              let username_baru = prompt('Masukan Username Baru : ');
              username = username_baru;
              alert('Ganti Username Sukses !!');
              break;
            } else {
              alert('Maaf Usermame Yang Anda Masukan Salah !!');
              break;
            }
          // 5. Ganti Kata Sandi
          case '5':
            let cek_kataSandi = parseInt(prompt('Masukan Kata Sandi Anda Yang Lama : '));
            if (cek_kataSandi === kataSandi) {
              let kataSandi_baru = parseInt(prompt('Masukan Kata Sandi Baru : '));
              kataSandi = kataSandi_baru;
              alert('Ganti Kata Sandi Sukses !!');
              break;
            } else {
              alert('Maaf Kata Sandi Yang Anda Masukan Salah');
              break;
            }
          // Selain Diatas (Input Salah)
          default:
            alert ('Maaf Input Yang Anda Masukan Tidak Ada, Silahkan Coba Lagi !!');
            break;
        }
      } else {
        alert('Maaf Username Atau Kata Sandi Yang Anda Masukan Salah !!');
      }
      ulangi = confirm('Apakah Anda Mau Coba Lagi ? ');
    }
  }
}

const afif = new BuatATM('afif');

*/




