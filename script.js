let input = document.getElementById("input")
let botao = document.getElementById("botaoadd")
let tarefa = document.getElementById("nome-tarefa-id")
let lista = document.getElementById("tarefas")
let arraydetarefa = []
let botaolimpar = document.getElementById("limpar")

recuperartarefa()

function mostrartarefa() {
    let novali = ""
    arraydetarefa.forEach((tarefa, index) => {
        novali = novali + `<li class="listas ${tarefa.status == true ? "concluido" : ""}">
        <button class="botao-tick" onclick="concluir(${index})"><img src="/img/Tick.png" alt="Tick" class="imagem"></button>
        <p class="nome-tarefa ${tarefa.status == true ? "concluido" : ""}" id="nome-tarefa-id">${tarefa.tarefa}</p>
        <button class="botao-editar" ondblclick="editar(${index})"></button>
        <button class="botao-up" onclick="mudarcima(${index})"><img src="/img/setaup.png" alt="Mover cima" class="imagem"></button>
        <button class="botao-down" onclick="mudarbaixo(${index})"><img src="/img/setadown.png" alt="Mover baixo" class="imagem"></button>
        <button class="botao-delete" onclick="deletar(${index})"><img src="/img/Lixeira.png" alt="Lixeira" class="imagem"></button>
    </li>`
    })
    lista.innerHTML = novali
    localStorage.setItem("Lista", JSON.stringify(arraydetarefa))
}

function addtarefa() {

    if(input.value){
        arraydetarefa.push({
            tarefa: input.value,
            status: false
        })
    }
    else{
        alert("Digite uma tarefa")
    }
    input.value = ""
    mostrartarefa()
}

function deletar(index) {
    arraydetarefa.splice(index, 1)
    mostrartarefa()
}

function concluir(index) {
    arraydetarefa[index].status = !arraydetarefa[index].status
    mostrartarefa()
}

function editar(index){
    let entrada = prompt("Editar", arraydetarefa[index].tarefa)
    arraydetarefa[index].tarefa = entrada

    mostrartarefa()
}

function mudarcima(index){
    if(index > 0){
        let aux = arraydetarefa[index]
        arraydetarefa[index] = arraydetarefa[index-1]
        arraydetarefa[index-1] = aux
    }
    
    mostrartarefa()
}

function mudarbaixo(index){
    if(index < arraydetarefa.length-1){
        let aux = arraydetarefa[index]
        arraydetarefa[index] = arraydetarefa[index+1]
        arraydetarefa[index+1] = aux  
    }
    
    mostrartarefa()
}

function recuperartarefa() {
    let minhatarefa = localStorage.getItem("Lista")
    if(minhatarefa){
        arraydetarefa = JSON.parse(minhatarefa)
        mostrartarefa()
    }
}

function addenter(teclas){
    if(teclas.key == "Enter"){
        addtarefa()
    }
}

function limpar(){
    arraydetarefa.length = 0
    mostrartarefa()
}

botao.addEventListener("click", addtarefa)

document.addEventListener("keypress",addenter)

botaolimpar.addEventListener("click", limpar)















