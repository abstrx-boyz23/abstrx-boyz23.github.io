
// # ========= Project Sederhana ========== #
//  ■□ ====== Game Suit Jawa ====== □■

ulangiLagi = true
while (ulangiLagi) {
	// Tangkap pilihan user
	let player = prompt ('Pilih Salah Satu : \n( cth : gajah | manusia | semut )');
	// Tangkap pilihan komputer (random)
	let com = Math.random()
	if (com < 0.34) {
		com = 'gajah';
	} else if (0.34 <= com && com < 0.67) {
		com = 'manusia';
	} else {
		com = 'semut';
	}
	// Aturan Permainan
	let hasil;
	if (player == com) {
		hasil = 'Hasilnya SERI !!';
	} else if (player == 'manusia') {
		// if (com == 'gajah') {
		// 	hasil = 'Kamu KALAH !!';
		// } else {
		// 	hasil = 'Kamu MENANG !!';
		// } --> ganti pakai operator ternary
		hasil = (com == 'semut') ? 'Kamu MENANG !!' : 'Kamu KALAH !!'; 
	} else if (player == 'semut') {
		hasil = (com == 'gajah') ? 'Kamu MENANG !!' : 'Kamu KALAH !!';
	} else if (player == 'gajah') {
		hasil = (com == 'manusia') ? 'Kamu MENANG !!' : 'Kamu KALAH !!';
	} else {
		hasil = 'Permainan gagal, karena anda mengetik keyword yang salah'
	}
	// Tampilkan hasil permainan
	alert('Kamu Memilih : ' + player + '\nKomputer memilih : ' + com + '\n\nMaka, ' + hasil);
  // Tanya ulangi permainan
  ulangiLagi = confirm('Mau Main Lagi Nggak ??')
}
alert('Terimakasih sudah bermain 😊😊')

