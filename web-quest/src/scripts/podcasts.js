var btn = document.querySelector('#btnReadMore');
var container = document.querySelector('.question-on-corona');

btn.addEventListener('click', function() {

  if(container.style.display === 'block') {
    container.style.display = 'none';
    btn.innerHTML = 'Leia Mais';
  }else {
    container.style.display = 'block';
    btn.innerHTML = 'Leia Menos';
  }
}
  );




