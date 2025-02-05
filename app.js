//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo');
    if (amigo.value == ''){
        alert('Por favor, insira um nome.');
    } 
    amigos.push(amigo.value);

    atualizarListaAmigos();
    amigo.value = '';

    console.log(amigos);
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function(nome) {
        let item = document.createElement('li'); // Cria um novo elemento de lista
        item.textContent = nome; // Define o texto do item como o nome do amigo
        lista.appendChild(item); // Adiciona o item à lista no HTML
    });

}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return; // Encerra a função se o array estiver vazio
    }

    // Geração de um índice aleatório baseado no tamanho do array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado usando o índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;

    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciar() {
    amigos = [];

    atualizarListaAmigos();
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



