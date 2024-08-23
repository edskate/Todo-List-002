// Como eu aprendo/fico bom em lógica de Prgramação
/*
Lista de tarefas
[x] Saber quando o botão foi clicado
[x] pegar o texto dentro do input
[] Colacar esse texto na tela 
[] Deletar a tarefa da tela (quando eu clicar no x)

*/

function adicionarTarefa(){
     let valorDoInput = document.querySelector("input").value

       let li = document.createElement("li")
      li.innerHTML = valorDoInput + "<span>❌</span>"
console.log(li)
     
document.querySelector("ul").appendChild(li)

valorDoInput = ""
}


