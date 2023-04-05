const controle = document.querySelectorAll('[data-controle]')
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}
const estatistica = document.querySelectorAll('[data-estatistica]')

controle.forEach(element => {
  element.addEventListener('click', evento => { 
    AdicionarAtributos(evento.target.dataset.controle, evento.target.parentNode)
    if (evento.target.dataset.controle === '+') {
      AdicionarEstatistica(evento.target.dataset.peca)
    } else {
      RemoveEstatistica(evento.target.dataset.peca)
    }
  })
})

function AdicionarAtributos(ajuste, controle) {
  const peca = controle.querySelector('[data-contador]')
  if (ajuste === '+') {
    peca.value = parseInt(peca.value) + 1
  } else {
    peca.value = parseInt(peca.value) - 1
  }
}

function AdicionarEstatistica(peca) {
  estatistica.forEach(elemento => {
    elemento.textContent =
      parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}

function RemoveEstatistica(peca) {
  estatistica.forEach(elemento => {
    elemento.textContent =
      parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
  })
}
