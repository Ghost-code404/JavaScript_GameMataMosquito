var altura = 0
var largura = 0
var vidas = 1
var tempo = 60

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    var criaMosquitoTempo = 1500
}

if(nivel === 'dificil'){
    //1000
    var criaMosquitoTempo = 1000
}

if(nivel === 'seFudeo'){
    //750
    var criaMosquitoTempo = 750
}



function sizeAdjust() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

sizeAdjust()

var cronometro = setInterval(function(){
    tempo --

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }

    document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function randomPosition() {

    //remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }

        else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            document.getElementById('v' + vidas).alt = "coracao_vazio"

            vidas++
        }

        console.log('Elemento selecionado foi: ' + 'v' + vidas)
    }

    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //criar elemento .html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = randomSize() + " " + randomFlip()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + "px"
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
        //or mosquito.remove() (para casos de elementos fora do contexo)
    }

    document.body.appendChild(mosquito)

    //testes de funcionalidade das funcoes
    console.log(randomSize())
    console.log(randomFlip())
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function randomFlip() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'mosquitoA'
        case 1:
            return 'mosquitoB'
    }
}
