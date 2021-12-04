
// # ========== Project Sederhana ========== #
// ■□ === Mengelola Penumpang Angkot === □■


let penumpang = ['afif','rara','seli','guntur']

// === penumpang naik ===
// rules :
// 1. jika angkot kosong, penumpang naik dan duduk dikursi pertama
// 2. penumpang naik berikutnya, duduk dikursi berikutnya
// 3. jika ada kursi kosong (karena ada penumpang yg turun), maka penumpang naik selanjutnya harus mengisi kursi kosong itu terlebih dahulu.
// 4. jika ada penumpang dgn nama yg sama, maka dianggap penumpang itu sudah naik
function penumpangNaik(namaPenumpang,penumpang){
  // Jika angkot masih kosong
  if (penumpang.length === 0) {
    // 1. tambah penumpang
    penumpang.push(namaPenumpang)
    // 2. return
    return penumpang.join(', ');
  } 
  // Jika angkot sudah memiliki penumpang 
  else {
    // menelusuri kursi angkot
    for (let i = 0; i < penumpang.length; i++) {
      // 1. jika ada kursi angkot yang kosong
      if (penumpang[i] === undefined) {
        //tambah penumpang di kursi kosong tsb
        penumpang[i] = namaPenumpang;
        // return
        return penumpang.join(', ');
      } 
      // 2. jika ada penumpang naik dgn nama yg sama
      else if (penumpang[i] === namaPenumpang) {
        // tolak dan tampilkan pesan kesalahan
        console.log('Maaf penumpang tersebut sudah ada di dalam');
        // return
        return penumpang.join(', ')
      }
      // 3. selain di atas
      else if (i === (penumpang.length - 1)) {
        // tambah penumpang di kursi paling akhir
        penumpang.push(namaPenumpang)
        // return
        return penumpang.join(', ')
      }
    }
  }
}
// === penumpang turun ===
// rules :
// 1. jika angkot kosong tampilkan bahwa anglot kosong
// 2. jika penumpangTurun dgn nama yg sesuai, maka hapus namaPenumpang dgn memberi nilai undefined
// 3. jika penumpangTurun dgn nama yg tidak sesuai, maka tampilkan pesan kesalahan.

function penumpangTurun(namaPenumpang,penumpang) {
  // jika angkot masih kosong
  if (penumpang.length === 0) {
    // 1. tampilkan pesan bahwa angkot masih kosong
    console.log('Maaf Penumpang Masih Kosong');
    // 2. return
    return penumpang.join(', ')
  }
  // jika angkot sudah memliki penumpang
  else {
    // telusuri kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // 1. jika penumpangTurun dgn nama yg sesuai
      if (penumpang[i] === namaPenumpang) {
        // hapus namaPenumpang dgn memberi nilai undefined
        penumpang[i] = undefined
        // return
        return penumpang.join(', ')
      }
      // 2. jika penumpangTurun dgn nama yg tidak sesuai
      else if(i === (penumpang.length - 1)){
        // tampilkan pesan kesalahan.
        console.log('Maaf tidak ada penumpang dengan nama tersebut !!');
        // return 
        return penumpang.join(', ')
      }
    }
  }
}
