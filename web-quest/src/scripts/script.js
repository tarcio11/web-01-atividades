const questionTitle = document.getElementById('staticBackdropLabel')
const questionList = document.querySelector('.modal-body')
const nextQuestion = document.querySelector('.next-question')
const footerModalQuestionsCount = document.querySelector('.count-questions')
const timeCount = document.querySelector('.time-sec')
const modalFooter = document.querySelector('.modal-footer')

let count = 0
let questionsCounter = 1
let que_count = 0
let counter
let timeValue = 0
let score = 0

// Pegar as questoes e as respostas do array
function showQuestions (index = 0) {
  startTimer(0)
  questionsCount(1)
  let optionTag = `<li class="list-group-item mb-2 rounded questionRed" aria-current="true">${questions[index].options[0]}</li>`
    + `<li class="list-group-item mb-2 rounded questionBlue">${questions[index].options[1]}</li>`
    + `<li class="list-group-item mb-2 rounded questionOrange">${questions[index].options[2]}</li>`
    + `<li class="list-group-item mb-2 rounded questionGreen">${questions[index].options[3]}</li>`
    
  questionTitle.innerHTML = `${questions[index].id}. ${questions[index].question}`
  questionList.innerHTML = optionTag

  const option = questionList.querySelectorAll('.list-group-item')
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = () => {
      if (count < questions.length - 1) {
        count++
        questionsCounter++
        showQuestions(count)
        questionsCount(questionsCounter)
        clearInterval(counter)
        startTimer(0)
        optionSelect(option[i])
        que_count++
      }else {
        questionList.innerHTML = ''
        footerModalQuestionsCount.style.display = 'none'
        questionTitle.innerHTML = 'Fim de Jogo'
        timeCount.style.display = 'none'
        clearInterval(counter)
        let questionListResult = document.createElement('div')
        questionListResult.classList.add('modal-body')
        console.log(questionListResult);
        questionListResult.innerHTML = `<p>Você acertou ${score} de ${questions.length} questões.</p>`
        modalFooter.appendChild(questionListResult)
        let button = document.createElement('button')
        button.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block')
        button.innerHTML = 'Fechar'
        modalFooter.appendChild(button)
        button.onclick = () => {
          window.location.reload('/web-quest/src/public/quizz.html')
        }
      }
    }
  }
}

function optionSelect (option) {
  clearInterval(counter)
  if (option.textContent === questions[que_count].answer) {
    option.classList.toggle('correct')
    score++
  }else {
    option.classList.toggle('incorrect')
  }
}

function questionsCount (index) {
  let questionsCount = `<p>${index} de ${questions.length}</p>`
  footerModalQuestionsCount.innerHTML = questionsCount
}

function startTimer (time) {
  counter = setInterval(timer, 1000)
  function timer () {
    timeCount.innerHTML = time
    time++
    if (time < 9) {
      timeCount.innerHTML = '0' + time
    }
    if (time < 0) {
      clearInterval(counter)
      timeCount.innerHTML = '00'
    }

  }
}