const botaoTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function adicionarItem() {
  const tarefa = document.createElement('li');

  listaTarefas.appendChild(tarefa);
  tarefa.innerText = textoTarefa.value;
  textoTarefa.value = '';
}

botaoTarefa.addEventListener('click', adicionarItem);

function removerCorDeFundo() {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.children[index].classList.remove('selected');
  }
}

function adicionarCorDeFundo(event) {
  removerCorDeFundo();
  event.target.classList.toggle('selected');
}

listaTarefas.addEventListener('click', adicionarCorDeFundo);
