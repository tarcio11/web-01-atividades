var btn = document.querySelectorAll('.btnReadMore');
var divQuest = document.querySelector('.question-on-corona');

btn.forEach(button => {
    button.addEventListener('click', function () {
        if (divQuest.style.display === 'block') {
            divQuest.style.display = 'none';
            btn.innerHTML = 'Leia Mais';
        } else {
            divQuest.style.display = 'block';
            btn.innerHTML = 'Leia Menos';
        }
    }
    );
}
)