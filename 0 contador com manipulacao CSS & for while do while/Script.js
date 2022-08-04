function contar() {
var res1 = document.getElementById('res')
res1.innerHTML = ''
var n1 = document.getElementById('numini')
var n2 = document.getElementById('numfin')
var n3= document.getElementById('numinc')
if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
    window.alert('Vai pro inferno') 
} else {  
      
var numini = Number(n1.value)
var numfim = Number(n2.value)
var inc    = Number(n3.value)
var contagem = document.getElementById('contagem')
contagem.innerHTML = `Contando de ${numini} até ${numfim} com intervalos de ${inc} números`
if (inc == 0) {
    window.alert('Incremento 0 é inválido, será considerado como Incremento o valor 1')
    inc = 1
}
var res = document.getElementById('res')
if (numini > numfim) {
    for (var comecou = numini; comecou >= numfim; comecou -= inc) {
        res.innerHTML += `${comecou} \u{1F449}` 
            }
            res.innerHTML += `\u{1F3C1}`
} else {
for (var comecou = numini; comecou <= numfim; comecou += inc) {
    res.innerHTML += `${comecou} \u{1F449}` 
        }
        res.innerHTML += `\u{1F3C1}`
    }
    }
}


/*while (numini<=numfim) {    
    console.log(res.innerHTML = ` ${numini}`)
    numini = numini + inc
}
}



//for (numini < numfim;numini = numini + inc) {
    
/*

if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.getElementById('fundo').style.backgroundColor = 'grey'
    //fundo.style.backgroundColor = 'red';
}   else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.getElementById('fundo').style.backgroundColor = 'orange'
}
    else {
        img.src = 'fotonoite.png'
    document.getElementById('fundo').style.backgroundColor = 'magenta'
    }
}*/