function hitung(operasi) {
    // Ambil nilai bilangan dari input text
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    var hasil;

    // Cek operasi yang dipilih
    if (operasi === '+') {
        // Operasi penambahan
        hasil = bilangan1 + bilangan2;
    } else if (operasi === '-') {
        // Operasi pengurangan
        hasil = bilangan1 - bilangan2;
    } else if (operasi === 'x') {
        // Operasi perkalian
        hasil = bilangan1 * bilangan2;
    } else if (operasi === '/') {
        // Operasi pembagian
        if (bilangan2 !== 0) {
            hasil = bilangan1 / bilangan2;
        } else {
            hasil = "Tidak dapat dibagi oleh 0";
        }
    }

    // Tampilkan hasil pada input text
    document.getElementById("hasil").value = hasil.toString(); // Mengubah hasil menjadi string
}