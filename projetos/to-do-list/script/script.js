var buttonAdd =  document.getElementById("btnAdd");
var inpTasks = document.getElementById("inputTasks");
var tasks = document.getElementById("tasks");
var buttonLimpar = document.getElementById("btnLimpar");

document.onkeydown = callCreate;

function callCreate(e){
    if(e.keyCode == 13){
        createList();
    };
};



function addEvents(){
   buttonAdd.addEventListener("click", createList);
   buttonLimpar.addEventListener("click", clearList);

};

function clearList(){
    document.location.reload(true);
};

function createList(){
    if (inpTasks.value != ""){
        var divCreate = document.createElement('div');
        divCreate.setAttribute("class", "divCreate");
        tasks.appendChild(divCreate);

        var divCreate = document.createElement('div');
        divCreate.setAttribute("class", "divCreate");
        tasks.appendChild(divCreate);

        var box = document.createElement('input');
        box.type = "checkbox";
        box.setAttribute("class", "Box")
        divCreate.appendChild(box);

        var text = document.createElement('p');
        divCreate.appendChild(text);
        text.innerHTML = inpTasks.value;
        inpTasks.value = "";
    };


};


