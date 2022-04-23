// Bahan Bahan
const bulanRamadhan = new Date('nov 8, 2023 16:05:20').getTime();

// Agar Di Refresh Setiap 1 Detik
const hitungMundur = setInterval(() => {
  
  const now = new Date().getTime();
  const selisih = bulanRamadhan - now;
  // Rumus Waktu
  const rHari = 1000 * 60 * 60 * 24;
  const rJam = 1000 * 60 * 60;
  const rMenit = 1000 * 60;
  const rDetik = 1000;
  
  // Mencari Sisa Waktu
  const hari = Math.floor(selisih / rHari); 
  const jam = Math.floor((selisih % rHari) / rJam); 
  const menit = Math.floor((selisih % rJam ) / rMenit);
  const detik = Math.floor((selisih % rMenit ) / rDetik);
  
  // Tampilkan Ke Window
  const waktu = document.getElementById('waktu');
  waktu.innerHTML = `Waktu Anda Tersisa : <br /> ${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik Lagi !!!`;
  
  // Jika Waktu Habis Langsung Berhenti
  if (selisih <= 0) {
    waktu.innerHTML = 'Waktu Anda Habisss !!!';
    clearInterval(hitungMundur);
  }
}, 0);