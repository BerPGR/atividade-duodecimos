/*
Bernardo de Melo Matuchewski
Eduardo Mendes Machado
Gabriel Silva Barros
Walter Moura e Silva Junior


*/

const extensoes = ["", "primeira", "segunda", "terceira", "quarta", "quinta", "sexta", "sétima", "oitava", "nona", "décima", "undécima", "duodécima"]
const tempoAtual = new Date()
const horasJudaica = calculaHoras(tempoAtual.getHours())
const minutosJudaico = calculaMinutos(tempoAtual.getMinutes())

console.log(minutosJudaico + " da " + horasJudaica);

function calculaMinutos(minuto) {
    return `São ${parseInt(minuto/5)} duodécimos`
}

function calculaHoras(hora) {
    let horaNova = 0

    if (hora >=0 && hora<=6) {
        horaNova = hora + 6
    } else if (hora >= 7 && hora <= 18) {
        horaNova = hora - 6
    } else {
        horaNova = hora - 18
    }

    if (hora>=7 && hora <=18) {
        return `hora ${extensoes[horaNova]} diurna`
    } else {
        return `hora ${extensoes[horaNova]} noturna`
    }
}