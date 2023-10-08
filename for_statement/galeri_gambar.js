var imageUrls = [];

        // Mengisi array imageUrls dengan URL gambar online
        for (var i = 1; i <= 4; i++) {
            var imageUrl = "https://via.placeholder.com/400?text=Gambar+" + i;
            imageUrls.push(imageUrl);
        }

        var currentIndex = 0;
        var imageElement = document.getElementById("image");

        function showImage(index) {
            if (index >= 0 && index < imageUrls.length) {
                currentIndex = index;
                imageElement.src = imageUrls[currentIndex];
                imageElement.alt = "Gambar " + (currentIndex + 1);
            }
        }

        function previousImage() {
            currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
            showImage(currentIndex);
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % imageUrls.length;
            showImage(currentIndex);
        }

        // Menampilkan gambar pertama saat halaman dimuat
        showImage(currentIndex);