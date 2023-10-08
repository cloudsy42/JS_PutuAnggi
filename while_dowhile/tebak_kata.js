var kataKunci = [
    { jenis: "Buah", kata: "apel" },
    { jenis: "Kendaraan", kata: "mobil" },
    { jenis: "Minuman", kata: "susu" },
    { jenis: "Snacks", kata: "cokelat" }
];

var currentWordIndex = 0;
var score = 0;

var instructionsElement = document.getElementById("instructions");
var wordTypeElement = document.getElementById("word-type");
var wordDisplayElement = document.getElementById("word-display");
var guessInputElement = document.getElementById("guess-input");
var submitButton = document.getElementById("submit-button");

function startGame() {
    if (currentWordIndex >= kataKunci.length) {
        // Semua kata telah ditebak
        endGame();
        return;
    }

    var currentWord = kataKunci[currentWordIndex];
    wordTypeElement.textContent = currentWord.jenis;

    var wordToGuess = currentWord.kata;
    var guessedWord = wordToGuess[0] + "_ ".repeat(wordToGuess.length - 2) + wordToGuess[wordToGuess.length - 1];
    wordDisplayElement.textContent = guessedWord;

    guessInputElement.value = "";

    do {
        submitButton.addEventListener("click", checkGuess);
    } while (false);
}

function checkGuess() {
    var currentWord = kataKunci[currentWordIndex];
    var wordToGuess = currentWord.kata;
    var guessedWord = guessInputElement.value.toLowerCase();

    if (guessedWord === wordToGuess) {
        alert("Jawaban Anda Benar!");
        score++;
        currentWordIndex++;
        startGame();
    } else {
        alert("Maaf, jawaban Anda salah. Silakan coba lagi.");
    }
}

function endGame() {
    instructionsElement.textContent = "Permainan Selesai. Skor Anda: " + score;
    wordTypeElement.textContent = "";
    wordDisplayElement.textContent = "";
    guessInputElement.style.display = "none";
    submitButton.style.display = "none";
}

// Memulai permainan saat halaman dimuat
startGame();