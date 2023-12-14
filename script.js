const imageNames = [
            "tobat.jpg",
            "sarung bantal.png",
            "tabung air.png",
            "tanta.png",
            "satu kampung.png"
        ];

        let correctAnswers = imageNames.map(name => name.split(".")[0].toUpperCase());
        let remainingHearts = 3;
        let initialHearts = remainingHearts;
        let currentQuestionIndex = 0;

        function checkAnswer() {
            const userAnswer = document.getElementById("answerInput").value.toUpperCase();
            const correctAnswer = correctAnswers[currentQuestionIndex];

            if (userAnswer === correctAnswer) {
                // Jawaban benar
                document.getElementById("answerInput").style.display = "none";
                document.querySelector("#guessForm button").style.display = "none";
                document.getElementById("nextButton").style.display = "block";
            } else {
                // Jawaban salah
                remainingHearts--;

                if (remainingHearts === 0) {
                    gameOver();
                } else {
                    document.getElementById("heart" + remainingHearts).style.display = "none";
                }
            }
        }

        function gameOver() {
            alert("Game Over! Kamu kalah.");
            resetGame();
        }

        function resetGame() {
            currentQuestionIndex = 0;
            remainingHearts = initialHearts;
            resetState();
            showQuestion();
        }

        function nextQuestion() {
            currentQuestionIndex++;

            if (currentQuestionIndex < imageNames.length) {
                resetState();
                showQuestion();
            } else {
                alert("Selamat! Kamu berhasil.");
                // Tambahkan logika lain yang ingin Anda lakukan ketika permainan selesai
            }
        }

        function resetState() {
            if (remainingHearts === 0) {
                remainingHearts = initialHearts;
            }

            for (let i = 1; i <= initialHearts; i++) {
                const heartId = "heart" + i;
                document.getElementById(heartId).style.display = i <= remainingHearts ? "inline-block" : "none";
            }

            document.getElementById("answerInput").style.display = "block";
            document.querySelector("#guessForm button").style.display = "block";
            document.getElementById("nextButton").style.display = "none";
            document.getElementById("answerInput").value = "";
        }

        function showQuestion() {
            document.getElementById("questionImage").src = `asset/${imageNames[currentQuestionIndex]}`;
        }

        // Panggil resetGame saat memulai permainan
        function startQuiz() {
            resetGame();
  }
