function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() 
    var hr = data.getHours()
    msg.innerHTML = `Agora são ${hr} horas.`
    if (hr >= 0 && hr < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ecd9b8'
    } else if (hr >= 12 && hr < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#faa36f'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#1a2844'
    }
}   
