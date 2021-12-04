
// # ========= Project Sederhana ========== #
//  ■□ ====== Juragan Angkot ====== □■

// ■■■ PART 1 = operasi lancar semua ■■■
// let jumlahAngkot = 10;
// let nomorAngkot = 1;
// while (nomorAngkot <= jumlahAngkot) {
// 	console.log('Angkot No. '+ nomorAngkot +' beroprasi dengan baik');
// nomorAngkot += 1;
// }

// // ■■■ PART 2 = 6 lancar 4 bermasalah ■■■
// let jumlahAngkot = 10;
// let nomorAngkot = 1;
// let angkotBeroprasi = 6;
// // Angkot Beroprasi
// while (nomorAngkot <= angkotBeroprasi) {
// 	console.log('Angkot No. '+ nomorAngkot +' beroprasi dengan baik');
// nomorAngkot += 1	
// }
// // Angkot Bermasalah
// for(let angkotBermasalah = angkotBeroprasi + 1; angkotBermasalah <= jumlahAngkot; angkotBermasalah += 1) {
// 	console.log('Angkot No. '+ angkotBermasalah +' tidak beroprasi dengan baik');
// }

// //■■■ PART 3 = 1 Pengulangan & IF-ELSE ■■■
// for(let jumlahAngkot = 10, nomorAngkot = 1 ; nomorAngkot <= jumlahAngkot; nomorAngkot += 1 ) {
	
// 	if(nomorAngkot <= 7){
// 		console.log('Angkot No. '+ nomorAngkot +' beroprasi dengan baik');
// 	} else {
// 		console.log('Angkot No. '+ nomorAngkot +' tidak beroprasi dengan baik');
// 	}
// }

// // ■■■ Part 4 = 6 jalan no.8 lembur no.7,9,10 rusak ■■■

// for(let nomorAngkot = 1, jumlahAngkot = 10 ,angkotBeroprasi = 6; nomorAngkot <= jumlahAngkot; nomorAngkot += 1) {
	
// 	if(nomorAngkot <= angkotBeroprasi) {
// 		console.log('Angkot no. '+ nomorAngkot +' beroprasi dengan baik');
// 	} 
// 	else if (nomorAngkot === 8) {
// 		console.log('Angkot no. '+ nomorAngkot +' sedang lembur');
// 	}
// 	else {
// 		console.log('Angkot no. '+ nomorAngkot +' tidak beroprasi dengan baik');
// 	}
// }

// ■■■ Part 5 = no.2,3,4,6 jalan; no.5,8,10 lembur; no.1,7,9 rusak; ■■■

for(let nomorAngkot = 1, jumlahAngkot = 10 ,angkotBeroprasi = 6; nomorAngkot <= jumlahAngkot; nomorAngkot += 1) {
	
	if(nomorAngkot <= angkotBeroprasi && nomorAngkot !== 5 && nomorAngkot !== 1) {
		console.log('Angkot no. '+ nomorAngkot +' beroprasi dengan baik');
	} 
	else if (nomorAngkot === 5 || nomorAngkot === 8 || nomorAngkot === 10) {
		console.log('Angkot no. '+ nomorAngkot +' sedang lembur');
	}
	else {
		console.log('Angkot no. '+ nomorAngkot +' tidak beroprasi dengan baik');
	}
}






