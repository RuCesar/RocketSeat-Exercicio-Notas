/* TRANSFORMAR NOTAS ESCOLARES

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* DE 91 PARA CIMA -     A
* DE 81 A 90-           B
* DE 71-80-             C
* DE 61-70-             D
* DE 51-60-             E
* MENOR QUE 50          F
*/

var campo = document.querySelector(".caixa__nota");
var botao= document.querySelector(".botao");




function calcularNota(){

    var letra = document.querySelector(".letra");
    var nota = campo.value;
    var notaA = nota>=91 && nota<=100;
    var notaB = nota>=81 && nota<=90;
    var notaC = nota>=71 && nota<=80;
    var notaD = nota>=61 && nota<=70;
    var notaE = nota>=51 && nota<=60;
    

    if(notaA){

        letra.textContent= "A"

        } else if(notaB){
            
            letra.textContent= "B"
        }
        else if(notaC){
        
            letra.textContent= "C"
        }
        else if(notaD){
           
            letra.textContent= "D"
        }
        else if(notaE) {
           
            letra.textContent= "E"
        } else{
           
            letra.textContent= "F"
        }

    
        
    }


botao.onclick = calcularNota;


