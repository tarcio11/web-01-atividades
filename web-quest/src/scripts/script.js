const questionTitle = document.getElementById('staticBackdropLabel')
const questionList = document.querySelector('.modal-body')
const nextQuestion = document.querySelector('.next-question')
const footerModalQuestionsCount = document.querySelector('.count-questions')

let count = 0
let questionsCounter = 1

nextQuestion.onclick = () => {
  if (count < questions.length - 1) {
    count++
    questionsCounter++
    showQuestions(count)
    questionsCount(questionsCounter)
  }else {
    console.log('Questoes completadas');
  }
}

// Pegar as questoes e as respostas do array
function showQuestions (index = 0) {
  questionsCount(1)
  let optionTag = `<li class="list-group-item mb-2" aria-current="true">${questions[index].options[0]}</li>`
    + `<li class="list-group-item mb-2">${questions[index].options[1]}</li>`
    + `<li class="list-group-item mb-2">${questions[index].options[2]}</li>`
    + `<li class="list-group-item mb-2">${questions[index].options[3]}</li>`
    
  questionTitle.innerHTML = `${questions[index].id}. ${questions[index].question}`
  questionList.innerHTML = optionTag

  const option = questionList.querySelectorAll('.list-group-item')
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = () => {
      if (option[i].textContent === questions[index].answer) {
        option[i].classList.toggle('correct')
      }else {
        option[i].classList.toggle('incorrect')
      }
    }
  }
}

function questionsCount (index) {
  let questionsCount = `<p>${index} de ${questions.length}</p>`
  footerModalQuestionsCount.innerHTML = questionsCount
}