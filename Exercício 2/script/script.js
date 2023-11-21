function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (f_ano.value.length == 0 || f_ano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(f_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Bebê
                img.setAttribute('src', 'style/imgs/bebe_homem.png')
            } else if (idade >= 5 && idade < 15) {
                // Criança
                img.setAttribute('src', 'style/imgs/menino.png')
            } else if (idade >= 15 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'style/imgs/jovem_homem.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'style/imgs/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'style/imgs/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                // Bebê
                img.setAttribute('src', 'style/imgs/bebe_mulher.png')
            } else if (idade >= 5 && idade < 15) {
                // Criança
                img.setAttribute('src', 'style/imgs/menina.png')
            } else if (idade >= 15 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'style/imgs/jovem_mulher.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulta
                img.setAttribute('src', 'style/imgs/adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'style/imgs/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero}, com ${idade} anos.`
        res.appendChild(img)
    }
}