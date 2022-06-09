let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]

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