function confirmar() {
    let classeSelecionada = document.getElementById('classe').value;
    let poderSelecionado = document.getElementById('poder').value;
    let nome = document.getElementById('nome').value;
    let apelido = document.getElementById('apelido').value;
    let foto = document.getElementById('foto').value;
    foto2 = document.getElementById('foto2');
    foto2.innerHTML = `<img src="${foto}" alt="" style="width: 50%; height: auto; border-radius: 10px;">`

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`O terrível ${nome}, o ${classeSelecionada} mais temido em todo o mundo, o ${apelido} do ${poderSelecionado} chegou!`)

    if (classeSelecionada == 1 || poderSelecionado == 1) {
        alert ('Preencha as Opções!')
        resultado.innerHTML = (``)
        return;
    }
}