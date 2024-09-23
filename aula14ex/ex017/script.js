function gerartabuada() {
    var N = +document.getElementById('N').value;
    var ger = +document.getElementById('ger').value;
    var seltab = document.getElementById('seltab');

    if (N == 0 || ger == 0) {
        alert("Preencha todos os campos abaixo!");
        seltab.innerHTML = '<option>IMPOSSÍVEL GERAR TABUADA</option>';
        return;
    }

    seltab.innerHTML = ""; // Limpa as opções anteriores

    for (var i = 1; i <= 10; i++) {
        var option = document.createElement('option'); // Cria o elemento <option>
        option.text = `${N} x ${i} = ${N * i}`; // Define o texto da opção
        seltab.appendChild(option); // Adiciona a opção no <select>
    }
}