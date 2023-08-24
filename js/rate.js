const empregado = document.getElementById("empregado");
const filhos = document.getElementById("filhos");
const salario = document.getElementById("salario");
const button = document.getElementById("button");
var familia = 0;

button.addEventListener('click', validarButton);

function validarButton() {
    if (empregado.value === null || empregado.value === undefined || empregado.value === "") {
        window.alert("Por favor, Insira seu nome corretamente!");
    }
    else {
        if (filhos.value === null || filhos.value === undefined || filhos.value === "") {
            window.alert("Por favor, Insira a quantidade de filhos corretamente!");
        }
        else {
            if (salario.value <= 806.80) {
                 familia = filhos.value * 41.37;
            }
            else{
                if(salario.value >= 800.81 & salario.value <= 1212.64){
                 familia = filhos.value * 29.16;
                }
                else{
                    familia = 0;
                }
            }
            window.alert(empregado.value + " seu salário família é de " + familia);
        }

    }
    
}
