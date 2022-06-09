let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

document.querySelector('.scoreArea button').addEventListener('click', reset);

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]

        let bar = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${bar}%`

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class ="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clicked = parseInt(e.target.getAttribute('data-op'))

    if(questions[currentQuestion].answer === clicked){
        correctAnswer++;
    }
    currentQuestion++;
    showQuestion();
};

function finishQuiz() {
    let points = Math.floor((correctAnswer / questions.length) * 100);
    if (points <= 60){
        document.querySelector('.scoreText1').innerHTML = 'Por pouco!';
        document.querySelector('.scorePct').style.color = '#FF0000'
    } else if(points == 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom'
        document.querySelector('.scorePct').style.color = 'gold'
    } else if(points > 7) {
        document.querySelector('.scoreText1').innerHTML = 'Excelente'
        document.querySelector('.scorePct').style.color = '0D630D'
    }
    

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswer}`
    
    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = `100%`
};

function reset() {
    correctAnswer = 0;
    currentQuestion = 0;
    showQuestion();
}