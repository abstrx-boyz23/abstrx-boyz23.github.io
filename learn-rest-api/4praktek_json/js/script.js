function resultMenu() {
  $("#daftar-menu").html("");
  $.getJSON( "data/pizza.json", result => {
    const menu = result.menu;
    menu.forEach(data => {
      $("#daftar-menu").append(`
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="img/pizza/${data.gambar}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p>${data.deskripsi}</p>
            <h5 class="card-title">Harga Rp. ${data.harga},-</h5>
            <a href="#" class="btn" style="background-color: #2fcc9e; color: white;">Buy Now!</a>
          </div>
        </div>
      </div>`
      );
    });
  });
}

resultMenu();

// // Tanpa jQuery

// const navLink = document.querySelectorAll(".nav-link");
// navLink.forEach(a => {
//   a.addEventListener("click",() => {
//     navLink.forEach(b => b.classList.remove("active"));
//     a.classList.add("active");
//   });
// });

// Pakai jQuery

// $("nav-link").on("click",() => {  // Boleh
$(".nav-link").click(function () {
  $("#daftar-menu").html("");
  
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
  
  let nav = $(this).html();
  $("h1").html(nav);
  
  if (nav === "All Menu") {
    resultMenu();
    return;
  }
  
  $.ajax({
    url: "data/pizza.json",
    success: result => {
      const menu = result.menu;
      
      console.log(result);
      console.log(menu);
      
      
      $.each(menu, (i,data) => {
        if (data.kategori === nav.toLowerCase()) {
          $("#daftar-menu").append(`
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="img/pizza/${data.gambar}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${data.nama}</h5>
                <p>${data.deskripsi}</p>
                <h5 class="card-title">Harga Rp. ${data.harga},-</h5>
                <a href="#" class="btn" style="background-color: #61d7f4; color: white;">Buy Now!</a>
              </div>
            </div>
          </div>`
          );
        }
      });
    }
  });
});
