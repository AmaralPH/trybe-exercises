window.onload = function() {
    const body = document.querySelector('body');
    const titulo = document.querySelector('#title');
    const conteudo = document.querySelector('.conteudo');
    
    if (localStorage.getItem('corDeFundo') != null) {
        document.querySelector('body').style.backgroundColor = localStorage.getItem('corDeFundo');
    }

    if (localStorage.getItem('corDeTexto') != null) {
        body.style.color = localStorage.getItem('corDeTexto')
    }

    if (localStorage.getItem('tamanhoDaFonte') != null) {
        titulo.style.fontSize = localStorage.getItem('tamanhoDoTitulo');
        conteudo.style.fontSize = localStorage.getItem('tamanhoDaFonte');
    }

    if (localStorage.getItem('espacamento') != null) {
        conteudo.style.lineHeight = localStorage.getItem('espacamento');
    }

    if (localStorage.getItem('serifa') != null) {
        conteudo.style.fontFamily = (localStorage.getItem('serifa'));
    }

    addEventListener('input', function() {
        let fundoPreto = document.querySelector('#fundo-preto');
        let fundoBranco = document.querySelector('#fundo-branco');
        let fundoAmarelo = document.querySelector('#fundo-amarelo');
        if (fundoPreto.checked == true) {
            localStorage.setItem('corDeFundo', 'black')
            document.querySelector('body').style.backgroundColor = 'black';
        } else if (fundoBranco.checked == true) {
            localStorage.setItem('corDeFundo', 'white')
            document.querySelector('body').style.backgroundColor = 'white';
        } else if (fundoAmarelo.checked == true) {
            localStorage.setItem('corDeFundo', 'yellow')
            document.querySelector('body').style.backgroundColor = 'yellow';
        }
    })

    addEventListener('input', function() {
        let textoPreto = document.querySelector('#texto-preto');
        let textoBranco = document.querySelector('#texto-branco');
        let textoAmarelo = document.querySelector('#texto-vermelho');
        if (textoPreto.checked == true) {
            localStorage.setItem('corDeTexto', 'black')
            body.style.color = 'black';
        } else if (textoBranco.checked == true) {
            localStorage.setItem('corDeTexto', 'white')
            body.style.color = 'white';
        } else if (textoAmarelo.checked == true) {
            localStorage.setItem('corDeTexto', 'red')
            body.style.color = 'red';
        }
    })

    addEventListener('input', function() {
        let tamanhoDaFonte = document.querySelector('#tamanho-fonte').value;
        if (tamanhoDaFonte.substring(tamanhoDaFonte.length - 2) == 'px') {
            localStorage.setItem('tamanhoDaFonte', tamanhoDaFonte);
            localStorage.setItem('tamanhoDoTitulo', (tamanhoDaFonte.split('px')[0]) * 3 + 'px');
            titulo.style.fontSize = (tamanhoDaFonte.split('px')[0]) * 3 + 'px';
            conteudo.style.fontSize = tamanhoDaFonte;
        }
    })

    addEventListener('input', function() {
        let espacamento = document.querySelector('#espacamento').value;
        if (espacamento.substring(espacamento.length - 2) == 'px') {
            localStorage.setItem('espacamento', espacamento);
            conteudo.style.lineHeight = espacamento;
        }
    })

    addEventListener('input', function() {
        let serifa = document.querySelector('#serifa');
        let semSerifa = document.querySelector('#sem-serifa');
        if (serifa.checked == true) {
            localStorage.setItem('serifa', "'Times New Roman', Times, serif");
            conteudo.style.fontFamily = "'Times New Roman', Times, serif";
        } else if (semSerifa.checked) {
            localStorage.setItem('serifa', 'Arial, Helvetica, sans-serif');
            conteudo.style.fontFamily = 'Arial, Helvetica, sans-serif';
        }
    })
}