let input = document.getElementById("input")
let botao = document.getElementById("botaoadd")
let tarefa = document.getElementById("nome-tarefa-id")
let lista = document.getElementById("tarefas")
let arraydetarefa = []

recuperartarefa()

function mostrartarefa() {
    let novali = ""
    arraydetarefa.forEach((tarefa, index) => {
        novali = novali + `<li class="listas ${tarefa.status == true ? "concluido" : ""}">
        <button class="botao-tick" onclick="concluir(${index})"><img src="/img/Tick.png" alt="Tick" class="imagem"></button>
        <p class="nome-tarefa ${tarefa.status == true ? "concluido" : ""}" id="nome-tarefa-id">${tarefa.tarefa}</p>
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

botao.addEventListener("click", addtarefa)

document.addEventListener("keypress",addenter)

















