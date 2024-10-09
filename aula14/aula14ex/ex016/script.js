function contar(){
    var emoji = String.fromCodePoint(0x1F449)
    var strt = +document.getElementById('start').value
    var end = +document.getElementById('end').value
    var pas = +document.getElementById('step').value
    var res = document.getElementById('res')

    if (strt <= 0 || end <= 0 || pas <= 0) {
        alert("Preencha todos os campos abaixo!");
        res.innerHTML = 'IMPOSSIVEL CONTAR'
        return
    }
    res.innerHTML = ""

    if (strt < end) { for(var i = strt; i <=end; i += pas)
        res.innerHTML += `passo ${i} ${emoji}  `
    }else {
        for(var i = strt;i>=end;i-=pas){
            res.innerHTML += `passo ${i} ${emoji}  `
        }
    }

     res.innerHTML += "Contagem finalizada! 🎉"

}

 