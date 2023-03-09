const nama = "Fikri Ibnu Fajar";
let usia = 36;

let biodata = document.getElementById('biodata');


function generalBiodata() {
    let golongan;
    if(usia > 5 && usia < 10) {
        golongan = "Maka kamu masih anak anak";
    } 
    else if (usia > 11 && usia < 20){
        golongan = "Maka kamu adalah remaja";
    }
    else if (usia > 19 && usia < 30) {
        golongan = "Maka kamu adalah orang dewasa";
    }
    else if (usia > 30) {
        golongan = "Maka kamu sudah tua";
    }
    else {
        golongan = "Maka kamu masih bayi";
    }
    return biodata.innerHTML = golongan;
}

console.log (nama);
generalBiodata();