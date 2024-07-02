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
  
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  });
  
  // Sidebar
  const body = document.querySelector("body");
  const sidebar = body.querySelector(".sidebar");
  const contenIfSidebarOpen = body.querySelector(".content");
  const barAtasIfSidebarOpen = body.querySelector(".barAtas");
  const toggle = body.querySelector(".menu-utama");

  const toggle1 = body.querySelector(".nav-linkDp");
  const sidebardp = body.querySelector(".DpSideBar");
  
  
  let menuUtamaToggled = false;

  toggle1.addEventListener("click",()=>{
    sidebardp.classList.toggle("close");
  })
  
  
  toggle.addEventListener("click", () => {
    // Toggle kelas 'close' pada sidebar
    sidebar.classList.toggle("close");
    contenIfSidebarOpen.classList.toggle("ori");
    barAtasIfSidebarOpen.classList.toggle("ori");
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
  let baratasauto = document.getElementById('barAtas');
  
  // Fungsi untuk membuka sidebar
  function openSidebar() {
    sidebarauto.classList.remove('close');
    contenauto.classList.remove('ori');
    baratasauto.classList.remove('ori');
  }
  
  // Fungsi untuk menutup sidebar
  function closeSidebar() {
    contenauto.classList.add('ori');
    baratasauto.classList.add('ori');
    sidebarauto.classList.add('close');
  }
  
  // Menambahkan event listener untuk mouseover
  sidebarauto.addEventListener('mouseover', openSidebar);
  
  // Menambahkan event listener untuk mouseout
  sidebarauto.addEventListener('mouseout', closeSidebar);
  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getFirestore,
    doc, 
    getDoc,
    getDocs,
    setDoc,
    collection,
    query,
    where,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



var ModalEdit = document.getElementById("myModal1");


var spanEdit = document.getElementsByClassName("closeModal")[0]; 


spanEdit.onclick = function() {
  ModalEdit.style.display = "none";
  console.log("Modal closed");
}




const departemenId = localStorage.getItem('selectedDepartmentID') || "defaultDeptId";

function BuatDepartementdp(namaDpr, docId){

    var contentLinkdp = document.createElement('a');
    contentLinkdp.href = "/departemen";
    contentLinkdp.classList.add('aContent');
  
    contentLinkdp.addEventListener('click', function() {
      localStorage.setItem('selectedDepartment', namaDpr);
      localStorage.setItem('selectedDepartmentID', namaDpr);
  });

  var dpsidebar = document.getElementById("DpSideBar");
  
  var cardDp = document.createElement('div')
  
  var isicardDp = document.createElement('b');
  cardDp.classList.add('listdp');
  isicardDp.innerText = namaDpr;
  cardDp.append(isicardDp);
  contentLinkdp.append(cardDp);
  dpsidebar.append(contentLinkdp);


}


// references
let NameBox = document.getElementById("namaHitoInput");
let IDBox = document.getElementById("idHitoInput");
let JBBox = document.getElementById("JBHitoInput");
let HPBox = document.getElementById("HPHitoInput");
let JKBox = document.getElementById("jenisKelaminInput");

let insBtn = document.getElementById("buatButtonId");

function BuatDepartement(namaKaryawan, docId, jbKaryawan, hpkaryawan, jkkaryawan, idkaryawan) {

    var ulcontent = document.createElement('ul');
    ulcontent.classList.add('ul-content');

    var liNamaContent = document.createElement('li');
    var textNamaContent = document.createElement('b');
    textNamaContent.innerText = `Nama : ${namaKaryawan}`;
    liNamaContent.append(textNamaContent);

    var liJKContent = document.createElement('li');
    var textJKContent = document.createElement('b');
    textJKContent.innerText = `Jenis Kelamin : ${jkkaryawan}`;
    liJKContent.append(textJKContent);

    var liHPContent = document.createElement('li');
    var textHPContent = document.createElement('b');
    textHPContent.innerText = `No HP : ${hpkaryawan}`;
    liHPContent.append(textHPContent);

    var liIDContent = document.createElement('li');
    var textIDContent = document.createElement('b');
    textIDContent.innerText = `ID : ${idkaryawan}`;
    liIDContent.append(textIDContent);

    var liJBContent = document.createElement('li');
    var textJBContent = document.createElement('b');
    textJBContent.innerText = `ID : ${jbKaryawan}`;
    liJBContent.append(textJBContent);

    ulcontent.append(liNamaContent, liIDContent, liHPContent, liJKContent);

    var content = document.getElementById("content");
    var card = document.createElement('div');
    var isiCard = document.createElement('div');
    var NamaDepartementIsiCard = document.createElement('h3');
  
    var isiCardAtas = document.createElement('div');
    isiCardAtas.classList.add('isi-content1-atas');
    var isiCardTengah = document.createElement('div');
    isiCardTengah.classList.add('isi-content1-tngh');
    var isiCardBawah = document.createElement('div');
    isiCardBawah.classList.add('isi-content1-bwh');
  
    var isiCardDel = document.createElement('button');
    isiCardDel.classList.add('deleteDprBtn');
    isiCardDel.innerText = 'Delete';
    isiCardDel.dataset.docId = docId;
    isiCardDel.addEventListener('click', function() {
        DeleteDocument_Hito(docId, card);
    });
  
    var isiCardEdit = document.createElement('button');
    isiCardEdit.classList.add('editDprBtn');
    isiCardEdit.innerText = 'Edit';
    isiCardEdit.dataset.docId = docId;
    isiCardEdit.addEventListener('click', function() {
        document.getElementById('editDocId').value = docId;
        ModalEdit.style.display = "block";
    });
  
    isiCardAtas.append(NamaDepartementIsiCard);
    isiCardBawah.append(isiCardDel);
    isiCardBawah.append(isiCardEdit);
    isiCardTengah.append(ulcontent);
    isiCard.append(isiCardAtas, isiCardTengah, isiCardBawah);
  
    NamaDepartementIsiCard.innerText = jbKaryawan; // Menggunakan JBKaryawan
  
    card.classList.add('isi-content');
    isiCard.classList.add('isi-content1');
  
    card.append(isiCard);
    content.append(card);
  
    // Tambahkan event listener untuk menyimpan IdDp ke localStorage saat card diklik
    card.addEventListener('click', function() {
      localStorage.setItem('selectedDepartmentID', docId);
    });
}


// Add document with custom ID
async function AddDocument_CustomID(){
    var ref = doc(db,"Hito", IDBox.value);
    const docRef = await setDoc(
        ref,{
            NameKaryawan: NameBox.value,
            IdKaryawan: IDBox.value,
            JBKaryawan: JBBox.value,
            HPKaryawan: HPBox.value,
            JenisKelamin: JKBox.value,
            NameOfDp: departemenId,
        }
    )
    .then(()=>{
        BuatDepartement(NameBox.value, IDBox.value);
        alert("sukses");
    })
    .catch((error)=>{
        alert("gak sukses, error:"+ error);
    })
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Update fields in a document in the "Hito" collection
async function UpdateFieldsInADocument_Hito(docId, newValueNM, newValueID, newValueJB, newValueHP, newValueJK) {
    var ref = doc(db, "Hito", docId);
    await updateDoc(ref, {
        NameKaryawan: newValueNM,
        IdKaryawan: newValueID,
        JBKaryawan: newValueJB,
        HPKaryawan: newValueHP,
        JenisKelamin: newValueJK,
    })
    .then(() => {
        alert("Success");
        const cardElement = document.querySelector(`[data-doc-id="${docId}"]`).closest('.isi-content');
        cardElement.querySelector('h3').innerText =newValueNM ;
        ModalEdit.style.display = "none"; // Close the modal
    })
    .catch((error) => {
        alert("Failed, error: " + error);
    });
}

// Handle edit modal form submission for "Hito" collection
const editForm = document.getElementById("editForm");
if (editForm) {
    editForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const docId = document.getElementById("editDocId").value;
        const newValueNM = document.getElementById("editFieldnm").value;
        const newValueJK = document.getElementById("editFieldjk").value;
        const newValueHP = document.getElementById("editFieldhp").value;
        const newValueID = document.getElementById("editFieldid").value;
        const newValueJB = document.getElementById("editFieldjb").value;
        UpdateFieldsInADocument_Hito(docId, newValueNM, newValueID, newValueJB, newValueHP, newValueJK);
    });
}

// Delete a document from the "Hito" collection
async function DeleteDocument_Hito(docId, cardElement) {
    var ref = doc(db, "Hito", docId);
    const docSnap = await getDoc(ref);
  
    if (!docSnap.exists()) {
        alert("Document does not exist");
        return;
    }
    await deleteDoc(ref)
    .then(() => {
        alert("Success");
        cardElement.remove(); // Remove the card element from DOM
    })
    .catch((error) => {
        alert("Failed, error: " + error);
    });
}

if (insBtn) {
    insBtn.addEventListener("click", AddDocument_CustomID);
}

async function loadHitoByDepartmentId(departemenId) {
    const q = query(collection(db, "Hito"), where("NameOfDp", "==", departemenId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let namaKaryawan = doc.data().NameKaryawan;
        let jbKaryawan = doc.data().JBKaryawan;
        let hpkaryawan = doc.data().HPKaryawan;
        let jkkaryawan = doc.data().JenisKelamin;
        let idkaryawan = doc.data().IdKaryawan;
        BuatDepartement(namaKaryawan, doc.id, jbKaryawan, hpkaryawan, jkkaryawan, idkaryawan); 
    });
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHitoByDepartmentId(departemenId);
});

const querySnapshot = await getDocs(collection(db, "HitoManager"));
querySnapshot.forEach((doc) => {
  let namaDpr = doc.data().NameOfDp;
  BuatDepartementdp(namaDpr, doc.id);
});

