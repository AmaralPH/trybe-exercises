function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Exercício 1

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const monthDaysList = document.querySelector('#days');

    for (let day of dezDaysList) {
        const listItemDay = document.createElement('li');
        listItemDay.innerHTML = day;
        listItemDay.className = 'day'

        if ([24, 25, 31].indexOf(day) != -1) {
            listItemDay.className += ' holiday';
        };
        if ([4, 11, 18, 25].indexOf(day) != -1) {
            listItemDay.className += ' friday';
        };

        monthDaysList.appendChild(listItemDay);
    };  
};

createDaysOfTheMonth();


// Exercício 2

function criaBotao(string) {
    const button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = string;
    document.querySelector('.buttons-container').appendChild(button);
}

criaBotao('Feriados')


// Execício 3

const botaoFeriado = document.querySelector('#btn-holiday');

botaoFeriado.addEventListener('click', function() {
    const listaFeriados = document.querySelectorAll('.holiday');

    if (listaFeriados[0].style.backgroundColor == 'green') {
        for (let feridado of listaFeriados) {
            feridado.style.backgroundColor = 'rgb(238,238,238)';
            feridado.style.border = null
            feridado.style.color = '#777'
        }
    } else {
        for (let feridado of listaFeriados) {
            feridado.style.backgroundColor = 'green';
            feridado.style.border = '0.5px solid'
            feridado.style.color = 'black'
        }
    }
})


// Exercício 4

function botaoSextou(string) {
    const button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = string;
    document.querySelector('.buttons-container').appendChild(button);
}

botaoSextou('Sexta-Feira');


// Exercício 5

const botaoSexta = document.querySelector('#btn-friday');
botaoSexta.addEventListener('click', function sextou() {
    const sextas = document.querySelectorAll('.friday');
    const anterior = [4, 11, 18, 25];

    if (sextas[0].innerHTML == 'SEXTOU') {
        for (let i = 0; i < sextas.length; i += 1) {
            sextas[i].innerHTML = anterior[i];
        }
    } else {
        for (let dia of sextas) {
            dia.innerHTML = "SEXTOU";
        }
    }
})


// Exercício 6

