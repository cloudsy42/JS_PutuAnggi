var kotak = document.getElementById("kotak");
        var container = document.getElementById("container");
        var posisiX = 0;
        var arahKanan = true;
        var animasiId;

        function animasiKotak() {
            if (arahKanan) {
                posisiX += 5;
                kotak.style.left = posisiX + "px";
                if (posisiX >= container.offsetWidth - kotak.offsetWidth) {
                    arahKanan = false;
                }
            } else {
                posisiX -= 5;
                kotak.style.left = posisiX + "px";
                if (posisiX <= 0) {
                    arahKanan = true;
                }
            }
            animasiId = requestAnimationFrame(animasiKotak);
        }

        document.getElementById("btnMulai").addEventListener("click", function() {
            // Memulai animasi
            animasiKotak();
        });

        document.getElementById("btnBerhenti").addEventListener("click", function() {
            // Menghentikan animasi
            cancelAnimationFrame(animasiId);
        });