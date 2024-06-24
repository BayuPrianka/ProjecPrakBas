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
  
  // Sidebar
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
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { 
    getFirestore,
    doc, 
    getDoc,
    getDocs,
    setDoc,
    collection,
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
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  
  // Get the modal for editing
  var ModalEdit = document.getElementById("myModal1");
  
  // Get the <span> element that closes the modal
  var spanEdit = document.getElementsByClassName("close")[1]; // Mengambil elemen close button untuk modal edit
  
    // When the user clicks on <span> (x), close the modal
    spanEdit.onclick = function() {
      ModalEdit.style.display = "none";
  }
  
  spanEdit.onclick = function() {
    ModalEdit.style.display = "none";
  }
  
  
  
  function BuatDepartement(namaDpr, docId){
  
  
    
    var contentLink = document.createElement('a');
    contentLink.href = "/departemen";
    contentLink.classList.add('aContent');
  
  var content = document.getElementById("content");
  var card = document.createElement('div');
  
  var isiCard = document.createElement('div');
  
  var NamaDepartementIsiCard = document.createElement('h3');
  
  var linkisicard = document.createElement('a');
  linkisicard.href = 'departemen.html';
  
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
      DeleteDocument(docId, card);
  });
  
  var isiCardEdit = document.createElement('button');
  isiCardEdit.classList.add('editDprBtn');
  isiCardEdit.innerText = 'Edit';
  isiCardEdit.dataset.docId = docId;
  isiCardEdit.addEventListener('click', function() {
      document.getElementById('editField').value = namaDpr;
      document.getElementById('editDocId').value = docId;
      ModalEdit.style.display = "block";
  });
  
  isiCardAtas.append(NamaDepartementIsiCard);
  isiCardBawah.append(isiCardDel);
  isiCardBawah.append(isiCardEdit);
  
  contentLink.append(isiCardAtas, isiCardTengah);
  
  isiCard.append(contentLink, isiCardBawah)
  linkisicard.append(isiCard);
  NamaDepartementIsiCard.innerText = namaDpr;
  
  card.classList.add('isi-content');
  isiCard.classList.add('isi-content1');
  
  card.append(isiCard);
  
  content.append(card);
    // Simpan nama departemen ke localStorage ketika link diklik
    contentLink.addEventListener('click', function() {
        localStorage.setItem('selectedDepartment', namaDpr);
        localStorage.setItem('selectedDepartmentID', namaDpr);
    });
  
  
  }
  
  // references
  let NameBox = document.getElementById("floatingInput");
  let RollBox = document.getElementById("Rollbox");
  let insBtn = document.getElementById("buatButtonId");
  
  // Add document with custom ID
  const btn1 = document.getElementById('buatButtonId')
  async function AddDocument_CustomID(){
      var ref = doc(db,"HitoManager",RollBox.value);
      // BuatDepartement();
      const docRef = await setDoc(
          ref,{
              NameOfDp: NameBox.value,
              IdDp: RollBox.value,
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
  
  
  // Update fields in a document
  async function UpdateFieldsInADocument(docId, newValue) {
    var ref = doc(db, "HitoManager", docId);
    await updateDoc(ref, {
        NameOfDp: newValue,
    })
    .then(() => {
        alert("Success");
        var cardElement = document.querySelector(`[data-doc-id="${docId}"]`).closest('.isi-content');
        cardElement.querySelector('h3').innerText = newValue;
        ModalEdit.style.display = "none"; // Close the modal
    })
    .catch((error) => {
        alert("Failed, error: " + error);
    });
  }
  
  // Delete a document
  async function DeleteDocument(docId, cardElement) {
    var ref = doc(db, "HitoManager", docId);
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
  
  insBtn.addEventListener("click", AddDocument_CustomID);
  
  const querySnapshot = await getDocs(collection(db, "HitoManager"));
  querySnapshot.forEach((doc) => {
    let namaDpr = doc.data().NameOfDp;
    BuatDepartement(namaDpr, doc.id);
  });
  
  // Handle edit modal form submission
  document.getElementById("editForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const docId = document.getElementById("editDocId").value;
    const newValue = document.getElementById("editField").value;
    UpdateFieldsInADocument(docId, newValue);
  });
  
  
  