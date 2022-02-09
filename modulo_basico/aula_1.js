//função detectora de números pares
var list = [1,2,3,4,5,6,7,8,9,10];
var listPares = [];
function validaPar(list){
    for(var n = 0;n < list.length;n++){
        if(list[n] % 2 === 0){
           listPares.push(list[n]);
        };
        
    };
   
};

validaPar(list)
console.log(`Os números pares são: ${listPares}`)