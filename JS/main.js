const controle = document.querySelectorAll("[data-controle");//seleciona todos os elementos com a classe controle-ajuste
const estatisticas = document.querySelectorAll("[data-estatistica")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach ( (elemento) => { //o forEach vai percorrer o Array do controle (que contem todas as classes)
    elemento.addEventListener("click", (evento) => { //ele vai pegar o elemento clicado e executar a arrowfunction
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //o parametro evento guarda as informações sobre o click, junto com a target ele mostra o que esta sendo executado. E com o .textContent ele mostra o texto sendo executado
        //da mesma forma o .parentNode, exibe o pai do elemento clicado
        atualizaEstatistica(evento.target.dataset.peca)
        })
})

 function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]')

    if(operacao === '-') {
        while(peca.value >0){
            peca.value =  parseInt(peca.value) - 1

        }
    }
    else {
        peca.value =  parseInt(peca.value) + 1
    }
 }

 function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
 }

