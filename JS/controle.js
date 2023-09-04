let input = document.getElementById("criarTarefa");
let btnAdd = document.getElementById("btn_add");
let lixeira = document.getElementById("deleteBtn");
let main = document.getElementById("campoTarefas");
let contador = 0;

function addTarefa(){
    let tarefa = input.value;
    if((tarefa !== "") && (tarefa!==null) && (tarefa!==undefined)){
        contador++;
        let novoItem = `<div class="item" id = "${contador}">
        <div onclick="concluirTarefa(${contador})" class="item-icon" >
            <i id ="icon_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></i>
        </div>
        <div class="item-nome">
            ${tarefa}
        </div>
        <div class="item-botao">
            <button class="delete" id="deleteBtn" onclick="deletar(${contador})">
                <i class="mdi mdi-delete"></i>
            </button>

        </div>
    </div>`;
        main.innerHTML +=novoItem;
        input.value = "";
        input.focus();


    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});

function concluirTarefa(id){
   let item =document.getElementById(id);
   let classe = item.getAttribute('class');

   if(classe == "item"){
    item.classList.add('clicado');
    let icone = document.getElementById("icon_"+id);
    icone.classList.remove('mdi-checkbox-blank-circle-outline');
    icone.classList.add('mdi-checkbox-marked-circle')
    item.parentNode.appendChild(item);
   }
   else{
    item.classList.remove('clicado');
    let icone = document.getElementById("icon_"+id);
    icone.classList.remove('mdi-checkbox-marked-circle');
    icone.classList.add('mdi-checkbox-blank-circle-outline')
   }

    
}

function deletar(id){
    let delTarefa = document.getElementById(id);
    delTarefa.remove();
}

