let listaPresenca = ["Sofia", "Mariana", "Beatriz", "Isabelly"];

function verificarPresenca(nome) {
    if(listaPresenca.includes(nome)){
        return nome + "está presente."
    }   
    else {
        return nome + "Não está presente."
    }
}
console.log(verificarPresenca("Guilherme, "));
console.log(verificarPresenca("Isabelly, "));
console.log(verificarPresenca("Italo, "));

