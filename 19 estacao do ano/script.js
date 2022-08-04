function estação() { // É possível usar acentuação
    let mês = prompt('Digite o mês em extenso (ex: Setembro)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Pode testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'VERÃO'
            break // Nunca esquecer do break!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'OUTONO'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'PRIMAVERA'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}


