function verificar(){
    var data = new Date()
    var Ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0|| (fano.value) > Ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('txsexo')
        var idade = Ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.height ='150'
        img.width = '150'
        img.style.borderRadius = '50%'
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 5){
                img.setAttribute('src', 'Bebezinho.jpg')
                //BEBE
            }else if (idade < 12){
                img.setAttribute('src', 'Menino.jpg')
                //CRIANÇA
            }else if(idade < 25){
                img.setAttribute('src', 'O jovem.jpg')
                //JOVEM
            }else if (idade < 55){
                img.setAttribute('src', 'Homem.jpg')
                //ADULTO
            } else {
                img.setAttribute('src', 'Senhor.jpg')
                //IDOSO
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 5){
                img.setAttribute('src', 'Bebezinha.jpg')
                //BEBE
            }else if (idade < 12){
                img.setAttribute('src', 'Menina.jpg')
                //CRIANÇA
            }else if(idade < 25){
                img.setAttribute('src', 'A jovem.jpg')
                //JOVEM
            }else if (idade < 55){
                img.setAttribute('src', 'Mulher.jpg')
                //ADULTO
            } else {
                img.setAttribute('src', 'Senhora.jpg')
                //IDOSO
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
    }

}