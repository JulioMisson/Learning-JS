function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora<12){
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#FFD700	'
    }else if(hora<18){

        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        img.src = 'fotodatarde.jpg'
        document.body.style.background = '#ADD8E6'

    }else{
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        img.src = 'fotodanoite.jpg'
        document.body.style.background = '#00008B'

    }

}