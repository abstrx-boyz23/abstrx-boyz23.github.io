// 1. Membuat Tombol Ubah Warna Background
const btnUbahWarna = document.getElementById('btn-ubah-warna');
btnUbahWarna.addEventListener('click', () => {
  // document.body.style.backgroundColor = 'rgba(236,165,42,.6)';
  document.body.classList.toggle('ubah-warna');
  document.body.classList.toggle('contoh');
});

// 2. Membuat Tombol Ubah Warna Background (random)
const btnUbahWarnaAcak = document.createElement('button');
btnUbahWarnaAcak.innerHTML = 'Ubah Warna Background (Random)';
btnUbahWarna.after(btnUbahWarnaAcak);
btnUbahWarnaAcak.setAttribute('type','button');

btnUbahWarnaAcak.addEventListener('click', () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})

// 3. Setting Manual Warna Background
const slideMerah = document.getElementsByName('slide-merah')[0];
const slideHijau = document.getElementsByName('slide-hijau')[0];
const slideBiru = document.getElementsByName('slide-biru')[0];

  slideMerah.addEventListener('input', () => {
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  })
  
  slideHijau.addEventListener('input', () => {
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  })
  
  slideBiru.addEventListener('input', () => {
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  })
  
  // // 4. Background Berubah Saat Mouse Bergerak
  // document.body.addEventListener('mousemove',(event) => {
  //   // cari posisi mouse => event.clientX dan event.clientY
  //   // ukuran browser (window) => window.innerWidth
  //   const xPost = Math.round((event.clientX / window.innerWidth) * 255);
  //   const yPost = Math.round((event.clientY / window.innerHeight) * 255);
  //   document.body.style.backgroundColor = `rgb(${xPost},${yPost},100)`;
    
  // })
  