//Constante Variablen om id's te pakken van HTML
const question = document.getElementById('question');
const keuzes = Array.from(document.getElementsByClassName('keuze-text'));
const afbeelding = document.getElementById("afbeelding");
const finalScore = document.getElementById('finalScore');
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
var studentlogin = document.getElementById("studentlogin");
const quizMasterCode = "s1175118";


currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

/**
 * Check student number using the API
 */
function checkStudent(number) {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function() {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
            if (xHttp.status == 200) {
                studentIdentificationSucces(response);
            } else {
                studentIdentificationFailed(response);
            }
        }
    };
    xHttp.onerror = function() {
        studentIdentificationFailed(xHttp.statusText);
    };
    // xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
    xHttp.send();
}

/**
 * Student is successfully identified
 */

function studentIdentificationSucces(student) {
    console.info(student);
    const studentdata = Object.values(student); // Een Javascript-object met studentnummer, voornaam en achternaam
    globalThis.snummer = studentdata[0];
    var Snaam = studentdata[1];
    const gebruiker = document.getElementById('Snaam');
    gebruiker.innerText = Snaam;


    showLandingPage();
}

studentlogin.addEventListener("click", function() {
    const snummer = document.getElementById("snummer").value
        // checkStudent(snummer);
    console.log(snummer);
    if (snummer !== "") {
        var regex = /^(s|p|[a-z]{2})(\d{7})$/g;
        var valideer = snummer.match(regex);
        console.log(valideer);
        if (valideer == null) {
            const err = document.getElementById('error')
            err.innerText = 'studentnummer moet tenminste èèn "s" of een "p" en 7 characters bevatten';
        } else {
            checkStudent(snummer);

        }

    } else {
        // mag niet leeg zijn 
        const err = document.getElementById('error')
        err.innerText = 'studentnummer mag niet leeg.';
    }

});

//test
/**
 * Student number is incorrect
 */
function studentIdentificationFailed(errorMessage) {
    console.error(errorMessage);



    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt
}

function sendScore(snummer, score) {
    var xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function() {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            if (xHttp.status == 200) {
                console.info("Score succesvol opgeslagen");
                const sfeedback = document.getElementById("scorefeedback");
                sfeedback.innerText = "Score succesvol opgeslagen";
            } else {
                console.error("Score niet succesvol opgeslagen");
                const sfeedback = document.getElementById("scorefeedback");
                sfeedback.innerText = "Score niet succesvol opgeslagen";
            }
        }
    };

    xHttp.onerror = function() {
        console.error("Score niet succesvol opgeslagen");
    };

    xHttp.open("POST", "https://quiz.clow.nl/v1/score", true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify({
        quizMaster: quizMasterCode,
        student: snummer,
        points: score
    }));
}
var questions = [{
        afbeelding: "img/mario.jpg",
        question: 'Wie is deze Karakter?',
        keuze1: 'Luigi',
        keuze2: 'Wario',
        keuze3: 'Yoshi',
        keuze4: 'Mario',
        answer: 4,
        realAnswer: "Mario",
    },
    {
        afbeelding: "img/knight.png",
        question: "Van welke game is deze karakter?",
        keuze1: "Shovel Knight",
        keuze2: "Hollow Knight",
        keuze3: "Mordhau",
        keuze4: "For Honor",
        answer: 2,
        realAnswer: "HollowKnight",
    },
    {
        afbeelding: 'img/steve.jpg',
        question: " Hoe heet deze karakter?",
        keuze1: "Alex",
        keuze2: "John",
        keuze3: "Steve",
        keuze4: "Marc",
        answer: 3,
        realAnswer: "Steve",
    },
    {
        afbeelding: 'img/marionluigi.jpg',
        question: " Wat is het beroep van Mario en Luigi?",
        keuze1: "Loodgieters",
        keuze2: "Piloten",
        keuze3: "Pimps",
        keuze4: "Dokters",
        answer: 1,
        realAnswer: "Loodgieters",
    },
    {
        afbeelding: 'img/sonic.png',
        question: " Op wat voor dier is sonic gebaseerd",
        keuze1: "Muis",
        keuze2: "Egel",
        keuze3: "Konijn",
        keuze4: "Miereneter",
        answer: 2,
        realAnswer: "Egel",
    },
    {
        afbeelding: "img/link.png",
        question: " Hoe heet de hoofdkarakter van The Legend of Zelda?",
        keuze1: "Link",
        keuze2: "Zelda",
        keuze3: "Ganon",
        keuze4: "Midna",
        answer: 1,
        realAnswer: "Link",
    },
    {
        afbeelding: "img/200.jpg",
        question: " Wat is de meest verkochte game?",
        keuze1: "Gta 5",
        keuze2: "Minecraft",
        keuze3: "Tetris",
        keuze4: "Wii Sports",
        answer: 2,
        realAnswer: "Minecraft",
    },
    {
        afbeelding: "img/consoles.jpg",
        question: " Wat is de meest verkochte console tot nu toe?",
        keuze1: "Playstation 4",
        keuze2: "Wii",
        keuze3: "Xbox 360",
        keuze4: "Playstation 2",
        answer: 4,
        realAnswer: "Playstation 2",
    },
    {
        afbeelding: "img/tspin.gif",
        question: " Hoe heet deze move",
        keuze1: "Tetris",
        keuze2: "Line-break",
        keuze3: "T-spin",
        keuze4: "T-slot",
        answer: 3,
        realAnswer: "T-spin",
    },
    {
        afbeelding: "img/atari.gif",
        question: " In welk jaar is atari breakout ontstaan?",
        keuze1: "1975",
        keuze2: "1976",
        keuze3: "1977",
        keuze4: "1978",
        answer: 2,
        realAnswer: "1976",
    },
];

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

//Start game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //spread operator
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page

        sendScore(snummer, score);
        hideAllPages();
        showEndPage();
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    //afbeeldingen
    afbeelding.src = currentQuestion.afbeelding;
    keuzes.forEach((keuze) => {
        const number = keuze.dataset['number'];
        keuze.innerText = currentQuestion['keuze' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

//Goed of fout
keuzes.forEach((keuze) => {
    keuze.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedkeuze = e.target;
        const selectedAnswer = selectedkeuze.dataset['number'];



        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);

        } else {
            // (classToApply === "incorrect")
            var ra = document.getElementById("realAnswer");
            Object.values(currentQuestion);
            var x = Object.values(currentQuestion);
            var goed = "Goeie antwoord: ";
            var y = x[7]

            ra.innerText = goed + y;


            console.log(y);
        }

        selectedkeuze.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedkeuze.parentElement.classList.remove(classToApply);
            var ra = document.getElementById("realAnswer");
            ra.innerText = "";
            getNewQuestion();
        }, 1500);

        // console.log(selectedAnswer == currentQuestion.answer);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
    finalScore.innerText = score;
};


startGame();