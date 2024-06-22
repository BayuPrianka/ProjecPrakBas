  document.addEventListener("DOMContentLoaded", () => {
    const subMenuWrap = document.getElementById("subMenuWrap");
    const profilGambar = document.querySelector(".profilgambarmenu");

    function toggleMenu() {
      subMenuWrap.classList.toggle("open-menu");
    }


    profilGambar.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener("click", (e) => {
      if (!subMenuWrap.contains(e.target) && subMenuWrap.classList.contains("open-menu")) {
        subMenuWrap.classList.remove("open-menu");
      }
    });
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalBtn");


            // Open the modal
  btn.onclick = () => {
    modal.style.display = "block";
}



// Close the modal when clicking outside of the modal content
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


});
// sidebar
const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const contenIfSidebarOpen = body.querySelector(".content");
const toggle = body.querySelector(".menu-utama");

// Variabel untuk melacak apakah tombol menu utama telah ditekan
let menuUtamaToggled = false;

toggle.addEventListener("click", () => {
    // Toggle kelas 'close' pada sidebar
    sidebar.classList.toggle("close");
    contenIfSidebarOpen.classList.toggle("ori");
    // Update status menu utama
    menuUtamaToggled = !menuUtamaToggled;

    // Aktifkan atau nonaktifkan event listener berdasarkan status menu utama
    if (menuUtamaToggled) {
        // Nonaktifkan event listener
        sidebarauto.removeEventListener('mouseover', openSidebar);
        sidebarauto.removeEventListener('mouseout', closeSidebar);
    } else {
        // Aktifkan kembali event listener
        sidebarauto.addEventListener('mouseover', openSidebar);
        sidebarauto.addEventListener('mouseout', closeSidebar);
    }
});

// Mendapatkan elemen sidebar
let sidebarauto = document.getElementById('mySidebar');
let contenauto = document.getElementById('content');
// Fungsi untuk membuka sidebar
function openSidebar() {
    sidebarauto.classList.remove('close');
    contenauto.classList.remove('ori');
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    contenauto.classList.add('ori');
    sidebarauto.classList.add('close');
}

// Menambahkan event listener untuk mouseover
sidebarauto.addEventListener('mouseover', openSidebar);

// Menambahkan event listener untuk mouseout
sidebarauto.addEventListener('mouseout', closeSidebar);


// tes

const btn1 = document.getElementById('buatButtonId')
function clickBuatButton(){
  const modal = document.getElementById("myModal");
  var content = document.getElementById("content")
  var card = document.createElement('div')
  var isicard = document.createElement('div')
  card.classList.add('isi-content')
  isicard.classList.add('isi-content1')
  card.append(isicard)
  content.append(card)
  modal.style.display = "none";
}
