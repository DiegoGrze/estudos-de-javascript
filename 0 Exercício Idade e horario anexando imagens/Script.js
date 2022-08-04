function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora}h:${minuto}m`
if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.getElementById('fundo').style.backgroundColor = 'rgb(96, 135, 245)'
    //fundo.style.backgroundColor = 'red';
}   else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.getElementById('fundo').style.backgroundColor = 'orange'
}
    else {
        img.src = 'fotonoite.png'
    document.getElementById('fundo').style.backgroundColor = 'grey'
    }
}