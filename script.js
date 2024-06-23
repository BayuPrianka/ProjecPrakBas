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




//tambah departement
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getFirestore,
    doc, 
    getDoc,
    getDocs,
    setDoc,
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    deleteField
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";








// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyD_C-rScD4crkOa4vZAxwQ4vsx5FVzZvhw",
    authDomain: "latihan-1a8e0.firebaseapp.com",
    databaseURL: "https://latihan-1a8e0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "latihan-1a8e0",
    storageBucket: "latihan-1a8e0.appspot.com",
    messagingSenderId: "348463004295",
    appId: "1:348463004295:web:a43306dba9efaccc735622",
    measurementId: "G-W6NNH910C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



function BuatDepartement(namaDpr){
    var content = document.getElementById("content")
    var card = document.createElement('div')
    var isiCard = document.createElement('div')
    var NamaDepartementIsiCard = document.createElement('h2')
    NamaDepartementIsiCard.id = 'NamaDepartement';
    NamaDepartementIsiCard.innerHTML = namaDpr;
    NamaDepartementIsiCard.setAttribute('type', 'text');
    
    card.classList.add('isi-content')
    isiCard.classList.add('isi-content1')
    isiCard.append(NamaDepartementIsiCard)
    card.append(isiCard)
    content.append(card)
    
}



    
// references
let NameBox = document.getElementById("floatingInput");
let NamaDepartement = document.getElementById("NamaDepartement");
let RollBox = document.getElementById("Rollbox");


let insBtn = document.getElementById("buatButtonId");

//nulis 
const btn1 = document.getElementById('buatButtonId')
async function AddDocument_CustomID(){
    var ref = doc(db,"HitoManager",RollBox.value);
    // BuatDepartement();
    const docRef = await setDoc(
        ref,{
            NameOfStd: NameBox.value,
            RollNO: RollBox.value,
        }
    )
    .then(()=>{
        BuatDepartement(NameBox.value);
        alert("sukses");
    })
    .catch((error)=>{
        alert("gak sukses, error:"+ error);
    })
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}




insBtn.addEventListener("click",AddDocument_CustomID);




const querySnapshot = await getDocs(collection(db, "HitoManager"));
    querySnapshot.forEach(
        (doc) => {
        console.log(`apa ini woi ${doc.id} => ${JSON.stringify(doc.data())}`);
        let namaDpr = doc.data().NameOfStd;
        BuatDepartement(namaDpr)
    });
