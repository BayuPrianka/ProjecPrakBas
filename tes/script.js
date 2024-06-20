  document.addEventListener("DOMContentLoaded", () => {
    const subMenuWrap = document.getElementById("subMenuWrap");
    const profilGambar = document.querySelector(".profilgambar");

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
      sidebar = body.querySelector(".sidebar");
      toggle = body.querySelector(".menu-utama");

      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close");
      });