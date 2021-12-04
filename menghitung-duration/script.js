// ==== Mencari Total ====
const li = document.querySelectorAll('ul li')
// ambil semua elemen array
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// filter array yg hanya berisi file JavaScript Lanjutan
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing" video yg sudah difilter
  .map(durasi => durasi.dataset.duration)
  
// ubah durasi menjadi float, lalu menit menjadi detik 
  // ubah 10:30 => [10,30]
  .map(durasi => {
    const part = durasi.split(':').map(part => parseInt(part))
    return (part[0] * 60) + part[1];
  })

// jumlahkan semua durasi video menjadi satu
  .reduce((hasil,nilai) => hasil + nilai);
  
// ubah durasi menjadi satuan jam, menit, detik
  const jam = Math.floor(jsLanjutan / 3600);
  jsLanjutan = Math.floor(jsLanjutan - (jam * 3600));
  const menit = Math.floor(jsLanjutan / 60); 
  const detik = Math.floor(jsLanjutan - (menit * 60));
  
// simpan Total Durasi ke dalam DOM
let totalDurasi = document.querySelector('.total-durasi');
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
let jmlVideo = document.querySelector('.jumlah-video');
let totalVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
jmlVideo.textContent = `${totalVideo} video`

console.log(totalVideo);