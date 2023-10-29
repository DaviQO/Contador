const btnContar = document.getElementById('btn_contar');
const btnDescontar = document.getElementById('btn_descontar');
const btnZerar = document.getElementById('btn_zerar');
const contador = document.getElementById('contador');

let contando = 0;

contador.innerHTML = contando;

btnContar.addEventListener('click', function() {
    contador.innerHTML = ++contando;
});


btnDescontar.addEventListener('click', function() {
    contador.innerHTML = --contando;
});


btnZerar.addEventListener('click', function() {
    contador.innerHTML = contando = 0;
});

