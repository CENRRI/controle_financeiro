// Inicializar as variáveis
var contas = [];
var dinheiro = [];

// Função para adicionar conta à lista

function adicionarConta() {
    // Obter os valores dos campos de entrada
    var contaNome = parseFloat(document.getElementById("conta").value.replace(",", "."));
    var dataConta = document.getElementById("dataConta").value;

    // Adicionar a conta à lista
    contas.push({conta: contaNome, data: dataConta});

    // Atualizar a lista de contas
    var listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";
    for (var i = 0; i < contas.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = "R$ " + contas[i].conta.toFixed(2).replace(".", ",") + " no dia " + contas[i].data;
        listaContas.appendChild(item);
    }

    // Atualizar o total gasto
    var totalGasto = document.getElementById("totalGasto");
    totalGasto.innerHTML = "R$ " + calcularTotalGasto().toFixed(2).replace(".", ",");
}

// Função para adicionar entrada de dinheiro à lista
function adicionarDinheiro() {
    // Obter os valores dos campos de entrada
    var dinheiroEntrada = parseFloat(document.getElementById("dinheiro").value.replace(",", "."));
    var dataDinheiro = document.getElementById("dataDinheiro").value;

    // Adicionar a entrada de dinheiro à lista
    dinheiro.push({dinheiro: dinheiroEntrada, data: dataDinheiro});

    // Atualizar a lista de entrada de dinheiro
    var listaDinheiro = document.getElementById("listaDinheiro");
    listaDinheiro.innerHTML = "";
    for (var i = 0; i < dinheiro.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = "R$ " + dinheiro[i].dinheiro.toFixed(2).replace(".", ",") + " no dia " + dinheiro[i].data;
        listaDinheiro.appendChild(item);
    }

    // Atualizar o total recebido
    var totalRecebido = document.getElementById("totalRecebido");
    totalRecebido.innerHTML = "R$ " + calcularTotalRecebido().toFixed(2).replace(".", ",");

    // Atualizar a sobra
    var sobra = document.getElementById("sobra");
    sobra.innerHTML = "R$ " + calcularSobra().toFixed(2).replace(".", ",");
}

// Função para calcular o total gasto
function calcularTotalGasto() {
    var total = 0;
    for (var i = 0; i < contas.length; i++) {
        total += contas[i].conta;
    }
    return total;
}

// Função para calcular o total recebido
function calcularTotalRecebido() {
    var total = 0;
    for (var i = 0; i < dinheiro.length; i++) {
        total += dinheiro[i].dinheiro;
    }
    return total;
}

// Função para calcular a sobra
function calcularSobra() {
    var totalGasto = parseFloat(calcularTotalGasto());
    var totalRecebido = parseFloat(calcularTotalRecebido());
    var sobra = totalRecebido - totalGasto;
    return sobra;
}
