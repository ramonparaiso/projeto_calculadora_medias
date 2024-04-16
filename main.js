const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adcionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else { // Corrigindo a estrutura do bloco condicional

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value} </td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const MediaFinal = calculaMediaFinal();

    document.getElementById('Media-Final=Valor').innerHTML = MediaFinal.toFixed(2); // Corrigir o ID/ Limitar casas decimais
    document.getElementById('Media-Final=Resultado').innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
