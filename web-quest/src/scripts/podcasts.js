var btn = document.querySelectorAll('.btnReadMore');
var divQuest = document.querySelector('.question-on-corona');


btn.forEach(button => {
    button.addEventListener('click', function () {
        if (button.innerHTML === 'Leia Menos') {
            console.log('sdadsad');
            button.previousElementSibling.classList.add('read-more');
            button.innerHTML = 'Leia Mais';
        } else {
            console.log('22232');
            button.previousElementSibling.classList.remove('read-more');
            button.innerHTML = 'Leia Menos';
        }
    }
    );
}
)