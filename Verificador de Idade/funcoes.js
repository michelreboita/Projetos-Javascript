function verificaIdade() {
    var anoAtual = new Date().getFullYear()
    var anoNasc = document.getElementById("anoNasc").value
    var idade = anoAtual - anoNasc
    var msg = document.getElementById("msg")
    var foto = document.getElementById("foto")

    if (!(document.getElementById("sexoM").checked) && !(document.getElementById("sexoF").checked) || ((document.getElementById("anoNasc").value == "") || (anoNasc > anoAtual))) {
        alert("Verifique os dados e tente novamente.")
    }
    else {  
        if (document.getElementById("sexoM").checked) {
            if (idade < 18) {
                msg.innerHTML = `Detectamos Menino com ${idade} anos.`
                foto.src = "menino.png"
            } else if (idade < 60) {
                msg.innerHTML = `Detectamos Homem com ${idade} anos.`
                foto.src = "homem.png"
            } else {
                msg.innerHTML = `Detectamos Homem com ${idade} anos.`
                foto.src = "idoso.png"
            }
        } 
        else {
            if (idade < 18) {
                msg.innerHTML = `Detectamos Menina com ${idade} anos.`
                foto.src = "menina.png"
            } else if (idade < 60) {
                msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
                foto.src = "mulher.png"
            } else {
                msg.innerHTML = `Detectamos Idosa com ${idade} anos.`
                foto.src = "idosa.png"
            }
        }
    }
}