!(function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('button'));
    let calculation = document.getElementById('calculation');
    

    buttons.map((button) => {
        button.addEventListener('click', (event) => {
            let value = event.target.innerHTML;
            switch(value) {
                case 'C':
                    display.innerHTML = '';
                    calculation.innerHTML = '';
                    break;
                case '=':
                    try {
                        let expression = display.innerHTML;
                        calculation.innerHTML = expression;
                        let result = eval(expression);
                        display.innerHTML = result;
                    } catch (error) {
                        display.innerHTML = 'Error';
                    }
                    break;
                case '←':
                    let currentValue = display.innerHTML;
                    if (currentValue.length > 0) {
                        display.innerHTML = currentValue.slice(0, -1);
                    }
                    break;
                default:
                    display.innerHTML += value;
            }
        });
    })
})();