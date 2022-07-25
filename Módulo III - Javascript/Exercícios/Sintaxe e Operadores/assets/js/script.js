const firstDiv = document.querySelector('.firstStep');
const secondDiv = document.querySelector('.secondStep');
const finalDiv = document.querySelector('.finalStep');

function go(currentStep, nextStep) {
    let dNone, dBlock;
    if (currentStep == 1) {
        dNone = firstDiv;
    } else if (currentStep == 2){
        dNone = secondDiv;
    } else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';

    if (nextStep == 1) {
        dBlock = firstDiv;
    } else if (nextStep == 2){
        dBlock = secondDiv;
    } else {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

function validate() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    num1.style.border = 'none';
    num2.style.border = 'none';

    if (!num1.value || !num2.value) {
        if (!num1.value && !num2.value){
            num1.style.border = '1px solid red';
            num2.style.border = '1px solid red';
        } else if (!num1.value){
            num1.style.border = '1px solid red';
        }else {
            num2.style.border = '1px solid red';
        }
    } else {

        let valor = parseInt(num1.value) + parseInt(num2.value);
        const result = document.getElementById('resultado');

        function comparacao() {
            if (num1.value == num2.value) {
                return 'iguais';
            } else {
                return 'diferentes';
            }
        }
    
         function compara10() {
            if (valor > 10) {
               return 'maior';
            } else {
                return 'menor';
            }
        }
    
        function compara20() {
            if (valor > 20) {
                return 'maior';
            } else {
                return 'menor';
            }
        } 
        result.innerHTML = `Os números ${num1.value} e ${num2.value} são ${comparacao()}. Sua soma é ${valor}, que é ${compara10()} que 10 e ${compara20()} que 20.`;
        go (2, 3);
    }
}