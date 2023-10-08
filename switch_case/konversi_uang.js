function konversi() {
    // Ambil nilai jumlah, mata uang asal, dan mata uang tujuan
    var jumlah = parseFloat(document.getElementById("jumlah").value);
    var dari = document.getElementById("dari").value;
    var ke = document.getElementById("ke").value;

    // Menentukan nilai tukar mata uang
    var nilaiTukar;

    switch (dari) {
        case "usd":
            switch (ke) {
                case "eur":
                    nilaiTukar = 0.85;
                    break;
                case "idr":
                    nilaiTukar = 14200;
                    break;
                case "myr":
                    nilaiTukar = 4.17;
                    break;
                case "php":
                    nilaiTukar = 50.28;
                    break;
                case "thb":
                    nilaiTukar = 32.79;
                    break;
                case "sgd":
                    nilaiTukar = 1.34;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        case "eur":
            switch (ke) {
                case "usd":
                    nilaiTukar = 1.18;
                    break;
                case "idr":
                    nilaiTukar = 16749.60;
                    break;
                case "myr":
                    nilaiTukar = 4.93;
                    break;
                case "php":
                    nilaiTukar = 59.22;
                    break;
                case "thb":
                    nilaiTukar = 38.65;
                    break;
                case "sgd":
                    nilaiTukar = 1.59;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        case "idr":
            switch (ke) {
                case "usd":
                    nilaiTukar = 0.000071;
                    break;
                case "eur":
                    nilaiTukar = 0.000060;
                    break;
                case "myr":
                    nilaiTukar = 0.000029;
                    break;
                case "php":
                    nilaiTukar = 0.00354;
                    break;
                case "thb":
                    nilaiTukar = 0.00231;
                    break;
                case "sgd":
                    nilaiTukar = 0.000071;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        case "myr":
            switch (ke) {
                case "usd":
                    nilaiTukar = 0.24;
                    break;
                case "eur":
                    nilaiTukar = 0.20;
                    break;
                case "idr":
                    nilaiTukar = 34.64;
                    break;
                case "php":
                    nilaiTukar = 12.02;
                    break;
                case "thb":
                    nilaiTukar = 7.85;
                    break;
                case "sgd":
                    nilaiTukar = 0.32;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        case "php":
            switch (ke) {
                case "usd":
                    nilaiTukar = 0.020;
                    break;
                case "eur":
                    nilaiTukar = 0.017;
                    break;
                case "idr":
                    nilaiTukar = 282.14;
                    break;
                case "myr":
                    nilaiTukar = 0.083;
                    break;
                case "thb":
                    nilaiTukar = 0.65;
                    break;
                case "sgd":
                    nilaiTukar = 0.026;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        case "thb":
            switch (ke) {
                case "usd":
                    nilaiTukar = 0.030;
                    break;
                case "eur":
                    nilaiTukar = 0.026;
                    break;
                case "idr":
                    nilaiTukar = 431.63;
                    break;
                case "myr":
                    nilaiTukar = 0.13;
                    break;
                case "php":
                    nilaiTukar = 1.53;
                    break;
                case "sgd":
                    nilaiTukar = 0.040;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        case "sgd":
            switch (ke) {
                case "usd":
                    nilaiTukar = 0.75;
                    break;
                case "eur":
                    nilaiTukar = 0.63;
                    break;
                case "idr":
                    nilaiTukar = 14113.76;
                    break;
                case "myr":
                    nilaiTukar = 3.10;
                    break;
                case "php":
                    nilaiTukar = 37.89;
                    break;
                case "thb":
                    nilaiTukar = 24.99;
                    break;
                default:
                    nilaiTukar = 1; // Default jika mata uang tujuan tidak ditemukan
            }
            break;
        default:
            nilaiTukar = 1; // Default jika mata uang asal tidak ditemukan
    }

    // Menghitung hasil konversi
    var hasil = jumlah * nilaiTukar;

    // Menampilkan hasil
    document.getElementById("hasil").textContent = hasil.toFixed(2) + " " + ke;
}
