const questions = [
    {
        question: "1. Komponen apa yang berfungsi sebagai otak dari komputer, yang menjalankan semua instruksi program?",
        options: ["RAM", "Hard Disk", "CPU", "GPU"],
        correct: 2
    },
    {
        question: "2. Apa fungsi dari RAM dalam sebuah komputer?",
        options: ["Menyimpan data secara permanen", "Menampilkan gambar ke layar", "Menyimpan data sementara saat program dijalankan", "Menghubungkan komputer ke internet"],
        correct: 2
    },
    {
        question: "3. Komponen manakah yang bertanggung jawab untuk menampilkan grafik dan visual pada layar?",
        options: ["CPU", "GPU", "SSD", "Motherboard"],
        correct: 1
    },
    {
        question: "4. Apa peran dari power supply unit (PSU) dalam PC?",
        options: ["Mendinginkan komponen", "Mengolah data", "Menyuplai listrik ke seluruh komponen", "Menyimpan file sistem"],
        correct: 2
    },
    {
        question: "5. Komponen apa yang menghubungkan semua bagian komputer seperti CPU, RAM, dan perangkat penyimpanan?",
        options: ["Heatsink", "Power Supply", "Casing", "Motherboard"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcome-screen").classList.add("d-none");
    document.getElementById("quiz-box").classList.remove("d-none");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.classList.add("d-none");

    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    progressText.textContent = `Soal ke ${currentQuestionIndex + 1} dari ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-dark m-1";
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsElement.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    if (selectedIndex === questions[currentQuestionIndex].correct) {
        feedbackElement.textContent = "✅ Jawaban Benar!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "❌ Jawaban Salah!";
        feedbackElement.style.color = "red";
    }

    nextButton.classList.remove("d-none");
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-box").classList.add("d-none");
    document.getElementById("result-screen").classList.remove("d-none");
    document.getElementById("score-text").textContent = `Skor Kamu: ${score}/${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").classList.add("d-none");
    document.getElementById("welcome-screen").classList.remove("d-none");
}
