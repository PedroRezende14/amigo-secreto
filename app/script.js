function sortear() {
    let input = document.getElementById("nomes").value.trim();
    let nomes = input.split(",").map(nome => nome.trim()).filter(nome => nome);

    if (nomes.length < 2) {
        alert("Digite pelo menos dois nomes para sortear.");
        return;
    }

    let embaralhado = [...nomes].sort(() => Math.random() - 0.5);
    let resultados = [];
    let temSemPar = embaralhado.length % 2 !== 0;
    let semPar = null;

    if (temSemPar) {
        semPar = embaralhado.pop();
    }

    for (let i = 0; i < embaralhado.length; i += 2) {
        if (i + 1 < embaralhado.length) {
            resultados.push(`${embaralhado[i]} ➝ ${embaralhado[i + 1]}`);
        }
    }

    if (temSemPar) {
        resultados.push(`${semPar} ficou sem par!`);
    }

    document.getElementById("resultado").innerHTML = resultados.join("<br>");
    document.getElementById("resultado").style.display = "block";
}