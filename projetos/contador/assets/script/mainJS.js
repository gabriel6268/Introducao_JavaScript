//contador em JavaScript
var currentNumberWapper = document.getElementById("currentNumber");//pega o elemento e poe na variavel current
var currentNumber = 0;
var btnSub = document.getElementById("sub");
var btnAdd = document.getElementById("add");
var pSituacao = document.getElementById("situation");

function validaSub(){
    if( currentNumberWapper.innerHTML <= 10 && currentNumberWapper.innerHTML >=-9 ){
        return true};
};

function validaAdd(){
    if( currentNumberWapper.innerHTML <= 9 && currentNumberWapper.innerHTML >=-10 ){
        return true
    }
};//para validar se o botão deve estar ativo

function setColor(){
    if (currentNumberWapper.innerHTML < 0 && currentNumberWapper.innerHTML > -11){
        currentNumberWapper.style.color = "red";
        pSituacao.innerHTML = "Negativo";
        pSituacao.style.color = "red";
    }
    else if(currentNumberWapper.innerHTML > 0 && currentNumberWapper.innerHTML < 11){
        currentNumberWapper.style.color = "green";
        pSituacao.innerHTML = "Positivo";
        pSituacao.style.color = "green";
    }
    else{
        currentNumberWapper.style.color = "gray";
        pSituacao.innerHTML = "Neutro";
        pSituacao.style.color = "gray";
    };
};//para setar cores e a situação do numero

function decrement(){ 
    if (validaSub() == true){
        currentNumber = currentNumber - 1;
        currentNumberWapper.innerHTML = currentNumber;
        setColor();      
    };      
};

function increment(){
    if (validaAdd() == true){
        currentNumber = currentNumber + 1;
        currentNumberWapper.innerHTML = currentNumber;
        setColor()  
    };   
};

function addEvents(){
    document.getElementById("sub").addEventListener("click",decrement);
    document.getElementById("add").addEventListener("click",increment);
};//trabalhando com addevents