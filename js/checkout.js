function buscaItens(){
    var itens = [{
        nome: 'Notebook Gamer',
        quantidade: 2,
        imagem: 'imgs/notrog.png',
        preco:  4980.99,
    },
    {
        nome: 'Pc Gamer',
        quantidade: 1,
        imagem: 'imgs/1.png',
        preco: 6350.98,
    },
    {
        nome: 'Gabinete',
        quantidade: 1,
        imagem: 'imgs/2.png',
        preco: 1960.60,
    }
 ];

 return itens;
}

function renderItem(item){
    var container = document.querySelector('.items-container');
    var divItem = document.createElement('div');
    var imagem = document.createElement('img');
    var titulo = document.createElement('h3');
    var preco = document.createElement('span');
    var qtd = document.createElement('span');
    var tituloNode = document.createTextNode(item.nome);
    var formataDinheiro = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'});
    
    preco.appendChild(document.createTextNode(formataDinheiro.format(item.preco)))
    preco.classList.add('item');

    qtd.appendChild(document.createTextNode(`Qtd: ${item.quantidade}`));

    titulo.appendChild(tituloNode);
       
    imagem.setAttribute('src',item.imagem);

    divItem.classList.add('item');
    divItem.appendChild(imagem);
    divItem.appendChild(titulo);
    divItem.appendChild(qtd);
    divItem.appendChild(preco);

    container.appendChild(divItem);
}

function main(){
    const itens = buscaItens();
    const linkItens = document.querySelector("a[href='#items']")
    const quantidadeItens = itens.reduce(function(valorAnterior, item){
        return valorAnterior + item.quantidade;
    },0);
    linkItens.innerHTML = `${quantidadeItens} ${(quantidadeItens === 1 ? "Item" : "Item(s)")}`;

    for(var item of itens){
        renderItem(item);
    }
}