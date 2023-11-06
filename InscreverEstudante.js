//as funções servem para executar tarefas que são chamadas por algum gatilho, nesse caso é chamada quando clica no botão que está no html
//tudo que ta dentro da função é o que vai acontecer quando o botão que chama ela for clicado
function idadeEstudante(){
   
   
    let idadeCanina = prompt("Qual a idade do estudante?");
    if (isNaN(idadeCanina)) {
        alert("Por favor, insira uma idade válida.");
        return;
    }
    let calc= idadeEstudante / 3;
    alert("a idade do estudante é igual á " + calc + " anos humanos");
    let show = document.querySelector("interessados")
    show.textContent = "Resultado: a idade do estudante é " + calc;
}