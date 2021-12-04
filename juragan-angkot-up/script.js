
// # ========= Project Sederhana ========== #
//  ■□ === Juragan Angkot (Upgrade) === □■

function Angkot(namaSupir,jurusan,penumpang,kas) {
  this.namaSupir = namaSupir;
  this.jurusan = jurusan;
  this.penumpang = penumpang;
  this.kas = kas;
  // Penumpang Naik
  this.penumpangNaik = function(namaPenumpang) {
    if (this.penumpang.length === 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (let i = 0; i < penumpang.length; i++) {
        if (this.penumpang[i] === undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (this.penumpang[i] === namaPenumpang) {
          console.log('Maaf penumpang tersebut sudah ada di dalam');
          return this.penumpang;
        } else if (i === (this.penumpang.length - 1)) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };
  // Penumpang Turun
 this.penumpangTurun = function(namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert('Maaf angkot masih kosong, sehingga tidak ada penumpang turun');
      return false;
    } else {
      for (let i = 0; i < penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          this.penumpang[i] = undefined
          this.kas += bayar
          return this.penumpang;
        } else if (i === (this.penumpang - 1)) {
          alert('Maaf tidak ada penumpang dengan nama tersebut');
          return this.penumpang;
        }
      }
    }
  }
}

let angkot1 = new Angkot('Mang Udin',['Tegal','Larangan','Suradadi'],[],0)
let angkot2 = new Angkot('Mas Pendi',['Tegal','Slawi','Bumiayu'],[],0)
let angkot3 = new Angkot('Kang Abdul',['Tegal','Pasar Pagi','Banjaran'],[],0)


