const stockData = [
    { produto: 'Alcool em gel', quantidade: 50, localizacao: 'Almoxarifado 1', estoqueMinimo: 10 },
    { produto: 'Água sanitária', quantidade: 30, localizacao: 'Almoxarifado 2', estoqueMinimo: 15 },
    { produto: 'Apontador para lápis', quantidade: 5, localizacao: 'Almoxarifado 1', estoqueMinimo: 20 },
    { produto: 'Papel A4', quantidade: 100, localizacao: 'Almoxarifado 3', estoqueMinimo: 30 },
    { produto: 'Caneta esferográfica azul', quantidade: 40, localizacao: 'Almoxarifado 1', estoqueMinimo: 10 },
    { produto: 'Caneta esferográfica preta', quantidade: 60, localizacao: 'Almoxarifado 2', estoqueMinimo: 20 },
    { produto: 'Fita adesiva', quantidade: 25, localizacao: 'Almoxarifado 3', estoqueMinimo: 15 },
    { produto: 'Clipes de papel', quantidade: 15, localizacao: 'Almoxarifado 1', estoqueMinimo: 10 },
    { produto: 'Grampeador', quantidade: 20, localizacao: 'Almoxarifado 2', estoqueMinimo: 10 },
    { produto: 'Grampos para grampeador', quantidade: 1000, localizacao: 'Almoxarifado 3', estoqueMinimo: 200 },
    { produto: 'Bloco de notas', quantidade: 35, localizacao: 'Almoxarifado 1', estoqueMinimo: 10 },
    { produto: 'Tesoura', quantidade: 10, localizacao: 'Almoxarifado 2', estoqueMinimo: 5 },
    { produto: 'Agenda', quantidade: 50, localizacao: 'Almoxarifado 3', estoqueMinimo: 20 },
    { produto: 'Lápis de cor', quantidade: 60, localizacao: 'Almoxarifado 1', estoqueMinimo: 15 },
    { produto: 'Borracha', quantidade: 40, localizacao: 'Almoxarifado 2', estoqueMinimo: 10 },
    { produto: 'Grampo para papel', quantidade: 200, localizacao: 'Almoxarifado 3', estoqueMinimo: 50 },
    { produto: 'Pasta suspensa', quantidade: 30, localizacao: 'Almoxarifado 1', estoqueMinimo: 10 },
    { produto: 'Caixa de arquivo morto', quantidade: 20, localizacao: 'Almoxarifado 2', estoqueMinimo: 10 },
    { produto: 'Calculadora', quantidade: 15, localizacao: 'Almoxarifado 3', estoqueMinimo: 5 },
    { produto: 'Giz de cera', quantidade: 50, localizacao: 'Almoxarifado 1', estoqueMinimo: 15 },
    { produto: 'Fita métrica', quantidade: 30, localizacao: 'Almoxarifado 2', estoqueMinimo: 10 },
    { produto: 'Envelope', quantidade: 100, localizacao: 'Almoxarifado 3', estoqueMinimo: 30 },
    { produto: 'Etiqueta adesiva', quantidade: 80, localizacao: 'Almoxarifado 1', estoqueMinimo: 20 },
];

function getStockHighlightColor(quantidade, estoqueMinimo) {
    const percentual = quantidade / estoqueMinimo;
  
    if (percentual >= 1) {
        return 'verde';
    } else if (percentual >= 0.1) {
        return 'amarelo';
    } else {
        return 'vermelho';
    }
}

function corSatus(quantidade, estoqueMinimo) {
    const percentual = quantidade / estoqueMinimo;
  
    if (percentual >= 1) {
        return '';
    } else if (percentual >= 0.1) {
        return 'amarelo-status';
    } else {
        return 'vermelho-status';
    }
}
  
function fillStockTable() {
    const tableBody = document.querySelector('#stock-table tbody');
    tableBody.innerHTML = '';

    stockData.forEach(item => {
        const row = document.createElement('tr');
        const status = corSatus(item.quantidade, item.estoqueMinimo);
        const highlightColor = getStockHighlightColor(item.quantidade, item.estoqueMinimo);
        row.innerHTML = `
            <td>${item.produto}</td>
            <td class="${highlightColor}">${item.quantidade}</td>
            <td>${item.localizacao}</td>
            <td>${item.estoqueMinimo}</td>  
            <td class="${status}"></td>
        `;
        tableBody.appendChild(row);
    });
}

fillStockTable();
function updateStockData() {
    stockData.forEach(item => {
        item.quantidade = Math.floor(Math.random() * 100); // Atualiza a quantidade com um número aleatório
    });
    fillStockTable(); // Atualiza a tabela com os novos dados de estoque
}

window.onload = function() {
    fillStockTable();
    setInterval(updateStockData, 3000); // Atualiza os dados de estoque a cada 30 segundos
};



// ----------------- header ----------------- //


var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});