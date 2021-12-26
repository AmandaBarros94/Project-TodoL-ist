const botaoTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function adicionarItem () {
    const tarefa = document.createElement('li');

    listaTarefas.appendChild(tarefa);
    tarefa.innerText = textoTarefa.value;
    textoTarefa.value = "";
}

botaoTarefa.addEventListener('click', adicionarItem );