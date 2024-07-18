function reset(){
    document.getElementById("pria").checked = false;
    document.getElementById("wanita").checked = false;
    document.getElementById("berat_badan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("tinggi_badan").value = "";
}

function result(){
    let kelamin, berat, usia, tinggi, result;

    kelamin = document.forms["myForm"]["kelamin"].value;
    berat = document.forms["myForm"]["berat_badan"].value;
    usia = document.forms["myForm"]["usia"].value;
    tinggi = document.forms["myForm"]["tinggi_badan"].value;

    if (kelamin == "" || berat == "" || usia == "" || tinggi == "") {
        alert("Data harus diisi semua!");
        return false; 
    }
    
    if (isNaN(berat) || isNaN(usia) || isNaN(tinggi)) {
        alert("Data harus berupa angka!");
        return false; 
    }

    result = berat / ((tinggi / 100) * (tinggi / 100));
    document.getElementById("result").innerHTML = result.toFixed(1);
    if (result < 18.5) {
        document.getElementById("result-ket").innerHTML = "Anda kekurangan berat badan";
        document.getElementById("result-des").innerHTML = "Anda berada dalam kategori underweight atau kekurangan berat badan. " + 
        "Cara terbaik untuk meningkatkan berat badan adalah dengan memperbanyak asupan makanan yang bergizi dan tidak berolahraga berlebih.";
    } else if (result < 24.9) {
        document.getElementById("result-ket").innerHTML = "Anda memiliki berat badan ideal";
        document.getElementById("result-des").innerHTML = "Anda berada dalam kategori ideal. " + 
        "Pertahankan rentang berat badan anda dengan berolahraga cukup dan mangatur pola makan.";
    } else if (result < 29.9) {
        document.getElementById("result-ket").innerHTML = "Anda memiliki berat badan berlebih";
        document.getElementById("result-des").innerHTML = "Anda berada dalam kategori overweight atau kelebihan berat badan. " + 
        "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
    } else if (result >= 30) {
        document.getElementById("result-ket").innerHTML = "Anda kegemukan (Obesitas)";
        document.getElementById("result-des").innerHTML = "Anda berada dalam kategori overweight dan berada dalam rentang obesitas. " + 
        "Segera ubah pola hidup anda dengan mengatur pola makan dan asupan kalor, mulailah konsisten berolahraga untuk menurunkan berat badan anda. " +
        "Konsultasikan kondisi tubuh anda ke dokter segera untuk mendapatkan penanganan lebih lanjut.";
    }
    return false;
}