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
}