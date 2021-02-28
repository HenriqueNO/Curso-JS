function carregar(){
    var msg = document.getElementById('txt')
    var img = document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours()  
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora <= 0 && hora < 12){
        // Bom Dia!!
        img.src = 'fotoamanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        // Boa Tarde!!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        // Boa Noite!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }

}