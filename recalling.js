// Operator In
// Meengecek Property Setiap Object

const rara = {
  nama: "Nur Ratriningsih",
  sekolah: "SMKN 3 TEGAL"
}

const eko = {
  nama: "Eka Leo Winarso",
  sekolah: "SMAN 5 TEGAL",
  kelas: "XII MIPA 1"
}

function mengenalkan(namaObject) {
  if ("nama" in namaObject && "sekolah" in namaObject && "kelas" in namaObject) {
    return `Hey, kenalin ini temenku namanya ${namaObject.nama} \ndia sekolah di ${namaObject.sekolah} dan kelasnya di ${namaObject.kelas}`
  } else {
    return `Hey, kenalin ini temenku namanya ${namaObject.nama} \ndia sekolah di ${namaObject.sekolah}`
  }
  
}

console.log(mengenalkan(eko));
console.log(mengenalkan(rara));

// Nullish Coalesching Operator (??) => mirip Ternary Operator
// Mengecek dan Mengubah Data undefined  

const jualProduk = {
  mie_Instan: "10 Kardus",
  kopi: "15 Kardus",
  rokok: undefined,
  beras: "2 Karung"
}

for (let property in jualProduk) {
  jualProduk[property] = jualProduk[property] ?? "Kosong";
}

console.log(jualProduk);

// Optional Chaining
const myVar = {};
console.log(myVar?.a?.b?.c ?? "Belum Diisi");






