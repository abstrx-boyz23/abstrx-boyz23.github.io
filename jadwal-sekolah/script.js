
// # ========= Project Sederhana ========== #
//  ■□ ====== Jadwal Sekolah ====== □■

let cobaLagi = true
while (cobaLagi === true) {
	let hari = prompt('Masukan hari ini, huruf kecil semua : \n[ cth : senin | selasa | rabu | kamis | jum\'at ] ')
	switch (hari) {
		case 'senin':
			alert('Jadwal Hari Senin : \n\n▪ Sejarah Indonesia\n▪ Sejarah Indonesia\n▪ PPKN\n▪ PPKN\n▪ Kimia\n▪ Kimia\n▪ Kimia');
			break;
		case 'selasa':
			alert('Jadwal Hari Selasa : \n\n▪ Biologi\n▪ Biologi\n▪ KWU\n▪ Matematika\n▪ Matematika\n▪ PJOK\n▪ PJOK');
			break;
		case 'rabu':
			alert('Jadwal Hari Rabu : \n\n▪ Matematika\n▪ Matematika\n▪ B. Indonesia\n▪ Fisika\n▪ Fisika\n▪ Fisika\n▪ SBY');
			break;
		case 'kamis':
			alert('Jadwal Hari Kamis : \n\n▪ Matematika\n▪ Sosiologi\n▪ Sosiologi\n▪ Sosiologi\n▪ Biologi\n▪ B. Jawa\n▪ B. Jawa');
			break;
		case 'jum\'at':
			alert('Jadwal Hari Jum\'at : \n\n▪ PAI\n▪ PAI\n▪ B. Indonesia\n▪ B. Indonesia\n▪ B. Inggris\n▪ B. Inggris');
			break;
		default:
			alert('Maaf yang anda masukan salah !!');
			break;
	}
	cobaLagi = confirm('Mau Coba Ulang ??')
}

		
		
		
		
		
		
		
		
		
		
		
		