let computerNumber
let userNumbers = [] //array vazia
let attemps = 0
let maxGuesses = 10

function newGame() {
    window.location.reload() //executa o reload na página
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}


function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value) //ele entrará como numero

    if (userNumber > 100) {
        alert('Erro, o número digitado deve ser entre 1 e 100')
    }
    else {
        userNumbers.push(' ' + userNumber) //pegamos o numero da variavel userNumber e colocamos dentro da array userNumbers
        document.getElementById('guesses').innerHTML = userNumbers

        if (attemps <= maxGuesses) {
            if (userNumber > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Seu número é alto, tente mais baixo'
                document.getElementById('inputBox').value = '' //serve para assim que um valor ser digitado ele será apagado
                attemps++
                document.getElementById('attempts').innerHTML = attemps
            }
            else if (userNumber < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Seu número é baixo, tente mais alto'
                document.getElementById('inputBox').value = ''
                attemps++
                document.getElementById('attempts').innerHTML = attemps
            }
            else {
                document.getElementById('textOutput').innerHTML = 'Parabéns, acertou na mosca!!!'
                attemps++
                document.getElementById('attempts').innerHTML = attemps
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //serve para desabilitar o inputbox
            }
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Número de tentativas excedido! O número correto era ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //o primeiro readonly é o tipo e o segundo o valor
        }
    }
}