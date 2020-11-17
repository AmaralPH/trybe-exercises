window.onload = function() {
    let selecionaEstado = document.getElementById('seleciona-estado')
    let listaEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia',
        'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
        'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
        'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
        'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo',
        'Sergipe', 'Tocantins']
    
        for (let estado of listaEstados) {
            let opcao = document.createElement('option');
            opcao.value = estado;
            opcao.innerHTML = estado;
            selecionaEstado.appendChild(opcao);
        }

    let data = document.getElementById('input-data');

    let enviar = document.querySelector('.enviar');
    enviar.addEventListener('click', function(evt){
        evt.preventDefault();
    }, false);

    let saida = document.createElement('div');
    saida.className = 'div-saida'
    let body = document.querySelector('body');
    let listaDeDados = document.getElementsByClassName('input');
    //let enviar = document.querySelector('.enviar')
    enviar.addEventListener('click', function() {
        saida.innerHTML = '';
        for (let elemento of listaDeDados) {
            if (elemento.value.length == 0) {
                return;
            }
            if (elemento.checked) {
                saida.innerHTML += elemento.id + " ";
            } else if (elemento.name != 'moradia') {
                saida.innerHTML += elemento.value + " ";
            }
        }
        body.appendChild(saida);
    })

    let limpar = document.querySelector('#limpar');
    limpar.addEventListener('click', function() {
        saida.innerHTML = '';
        for (let elemento of listaDeDados) {
            elemento.value = null;
        }
    })
}