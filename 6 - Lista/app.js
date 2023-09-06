/* Selecionar itens */

//Variáveis
const alert = document.querySelector('.alert');
const form = document.querySelector('.list-form');
const list = document.getElementById('list');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.list-container');
const listList = document.querySelector('.list-list');
const clearBtn = document.querySelector('.clear-btn');

//Opção de edição
let editElement;
let editFlag = false;
let editID = ''; 

//Event listeners
form.addEventListener('submit', addItem);
clearBtn.addEventListener("click", clearItems); 

//Functions

//Adicionar Item na lista: 
function addItem(e){
    e.preventDefault();
    const value = list.value;
    const id = new Date().getTime().toString(); 

    //Se o valor for diferente de vazio e a variável editFlag for false
    if(value !== '' && editFlag === false){
    //if(value && !editFlag){} - Outra forma de escrever o if    
       
    //Cria um elemento html
    const element = document.createElement("article");

        //adiciona a classe do elemento
        element.classList.add('list-item');

        //adiciona o id do elemento e constrói o html  
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
       
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fa fa-edit"> Editar</i>
            </button>   
            <button type="button" class="delete-btn">
                <i class="fa fa-trash"> Excluir</i>
            </button>
        </div>`;

        //append child
        listList.appendChild(element); 

        //mostra msg de sucesso
        displayAlert("Item adicionado à lista.", "success");

        //Mostra o container
        container.classList.add("show-container");

        //Adicionar ao local
        addToLocalStorage(id, value);

        //Voltar ao padrão
        setBackToDefault();

    }
    else if(value !== '' && editFlag === true){
    //if(value && editFlag){} - Outra forma de escrever o if
        console.log("editing");
    }
    else{
        displayAlert("Por favor, insira um item.", "danger");
    }
}

//Mostrar alerta: 
function displayAlert(text, action){
    alert.textContent =  text;
    alert.classList.add(`alert-${action}`); 

    //Apagar o alerta:
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1500);
}

//Adicionar ao local:
function addToLocalStorage(id, value){
    console.log('added to local'); 
}

//Voltar ao padrão após adicionar item:
function setBackToDefault(){
    list.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Incluir"; 
}

//Limpar itens da lista
function clearItems(){
    const items = document.querySelectorAll('.list-item');
    if(items.length > 0){
        items.forEach(function(item){
            listList.removeChild(item);
            container.classList.remove("show-container"); 
            displayAlert('Lista esvaziada', "danger"); 
            setBackToDefault();  
        })
    }
}