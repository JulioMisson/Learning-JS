let num = []
function adicionar(){
    let valor = +document.getElementById('valor').value
    let tab = document.getElementById('seltab') 

    document.getElementById("valor").value = "";
    

if(valor > 100){

     alert('insira valor entre 1 e 100 ')

}else if(valor === 0) {

    alert("Digite um numero")

}else {
    num.push(valor)
    
    let option = document.createElement("option")
    option.text = `${valor}`
    tab.appendChild(option);
    }
    
}

function finalizar(){ 
    let res = document.getElementById('res');
    let maior = Math.max(...num)
    let menor = Math.min(...num)
    let soma = num.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let Média = soma/num.length

    res.innerHTML += `<br><strong>Total de numeros cadastrados: ${num.length}</strong>`
    res.innerHTML += `<br><strong>O maior numero digitado: ${maior}</strong>`
    res.innerHTML += `<br><strong>O menor numero digitado: ${menor}</strong>`
    res.innerHTML += `<br><strong>Somando todos os valores temos: ${soma}</strong>`
    res.innerHTML += `<br><strong>A Média dos valores : ${Média}</strong>`
}

function limpar() {
    // Limpar o array
    num = []; // Esvazia o array de números

    // Seleciona o <select> e remove todas as opções, exceto a primeira
    let tab = document.getElementById('seltab');
    
    // Remover todas as opções exceto a primeira (a mensagem original)
    while (tab.options.length > 1) { 
        tab.remove(1); // Remove a segunda opção até restar apenas a primeira
    }

    // Limpar o resultado
    let res = document.getElementById('res');
    res.innerHTML = ""; // Limpa o conteúdo da div de resultados

    // Limpar o input (caso tenha algum valor residual)
    document.getElementById("valor").value = ""; // Limpa o campo de entrada de valores
}
