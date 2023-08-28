const employer = document.getElementById("employer");
const filhos = document.getElementById("filhos");
const salary = document.getElementById("salary");
const button = document.getElementById("button");
var family = 0;

button.addEventListener('click', validateButton);

/*  validateButton
    Function: validate if the name, son and salary are filled correctly
    Author: Fabas
*/
function validateButton() {
    if (employer.value === null || employer.value === undefined || employer.value === "") {
        window.alert("Por favor, Insira seu nome corretamente!");
    }
    else {
        if (son.value === null || son.value === undefined || son.value === "") {
            window.alert("Por favor, Insira a quantidade de son corretamente!");
        }
        else {
            if (salary.value <= 806.80) {
                 family = son.value * 41.37;
            }
            else{
                if(salary.value >= 800.81 & salary.value <= 1212.64){
                 family = son.value * 29.16;
                }
                else{
                    family = 0;
                }
            }
            window.alert(employer.value + " seu salário família é de " + family);
        }

    }
    
}
