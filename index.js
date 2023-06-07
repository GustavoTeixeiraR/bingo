var jogadores = []

function inscreverJogador(){
    var nome_jogador = prompt('Digite o nome do jogador');

    var cartela = gerarCartela();

    var jogador = {
        nome_jogador: nome_jogador,
        cartela: cartela
    }

    jogadores.push(jogador)

    console.log(jogadores)
}

function gerarCartela(){
    var cartela = [gerarColuna(5,1,15), ];

    while(cartela.length < 24){
        var aleatorio = math.floor(math.random()*75 + 1);
        if(!cartela.includes(aleatorio)){
           cartela.push(aleatorio);
        }
    }

    return cartela;
}

function gerarColuna(quantidade, inicio, fim){
    var coluna = []

    if (quantidade > fim - inicio){
        console.log('intervalo insuficiente')
        return;
    }

    while(coluna.length < quantidade){
        var aleatorio = math.floor(math.random()*(fim - inicio) + inicio)
        if(!coluna.includes(aleatorio)){
            coluna.push(aleatorio);
        }
    }
}

function desenharCartela(){

    //selecionar o local onde vamos inserir a cartela
    var local_cartela = document.getElementById('cartelas');

    // criar uma div com a classe cartela
    var div_cartela = document.createElement('div');
    div_cartela.className = 'cartela';

    // criar um h4 com o nome do jogador
    var h4_nome = document.createElement('h4');
    h4_nome_InnerText = prompt('Digite o nome do jogador');


    // inserindo o nome e a div no local da cartela

    div_cartela.appendChild(h4_nome);
    local_cartela.appendChild(div_cartela);

    //vamos criar a tabela

    var tabela = document.createElement('table')
    var thead = document.createElement('thead')
    var thB = document.createElement('th')
    thB.innerText = 'B'

    //inserindo nos locais certos
    thead.appendChild(thB);
    
    tabela.appendChild(thead);

    // criar o tbody da tabela 

    var tbody = document.createElement('tbody');

    for(var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for(var i=0; 1 < 5, i++)

    }

}

function  jogar(){
    if (jogadores.length < 2){
        alert('Não é possivel jogar sem jogadores');
        return;
    }

    var numeros_sorteados = [];

    var intervalo = setInterval(function(){
       
        while(true){
            aleatorio = math.floor(math.random()*75 + 1)
            if(!numeros_sorteados.includes(aleatorio)){
                numeros_sorteados.push(aleatorio);
                var div_numeros = document.getElementById('jogo');
                var span = document.createElement('span');
                span.innerText = aleatorio;
                div_numeros.appendChild(span);
                break;
            }

            if (verificarGanhador(numeros_sorteados)){
                break;
            }
        }
        console.log(numeros_sorteados);
    }, 1000)
}

function verificarGanhador(numeros_sorteados){
    jogadores.forEach(function(jogador){
        var quantidade = 0;
        for(var i = 0, i < jogador.cartela.length; i++){
            for(var j = 0; j < numeros_sorteados.length; j++){
                if(jogador.cartela[i] == numeros_sorteados[j]){
                    quantidade++;
                }
            }
        }
        if(quantidade == 24){
            return true;
        }
    })

}