//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Check if the name is empty or a number
    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, insira um nome válido.");
        return;  // Stop execution if the name is invalid
    }

    amigos.push(nome);
    atualizarLista();

    // Reset the input field after adding the name
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Clear the list before updating

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);  // Corrected the random logic
    let amigoSorteado = amigos[indiceSorteado];

    sorteados.push(amigoSorteado);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;  // Show only the drawn friend

    dispararConfete();

    sorteados = [];  // Reset the drawn friends list (optional, depends on your logic)

    atualizarLista();
}

function dispararConfete() {
    var count = 500;
    var defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91 });
    fire(0.1, { spread: 180, startVelocity: 25 });
}