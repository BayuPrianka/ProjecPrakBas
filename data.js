const namaSaya = "Encore";
let usia = 12;

let biodata = document.getElementById('biodata');


function bioData (){
    let generasi;
    if(usia < 5){
        generasi = "Balita";
    }else if (usia < 10) {
        generasi = "Anak-Anak";
    }else if (usia < 20) {
        generasi = "Remaja"
    }else if (usia < 30) {
        generasi = "Dewasa"
    }else{
        generasi = "Tua"
    }
    return biodata.innerHTML = generasi;
}

bioData()