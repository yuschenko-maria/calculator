let a = '',
b = '',
sign = '',
finish = false;
const display = document.querySelector('.calc-display p');
let options;

const digit = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '/', 'x'];

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = 0;
}

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) clearAll();
    display.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === ''){
            a += key;
            display.textContent = a;
        }
        else if (a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            display.textContent = b;
        }
        else {
            b += key;
            display.textContent = b;
        }
    }
    if (action.includes(key)) {
        sign = key;
        display.textContent = sign;
        return;
    }
    if (key === '=') {
        if (b === '') b = a;
        switch (sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
        }
        finish = true;
        display.textContent = a;
    }
}