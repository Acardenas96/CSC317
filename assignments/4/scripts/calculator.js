

const display = document.getElementById('display');


document.addEventListener('DOMContentLoaded', function() {
    
    const themeButtons = document.querySelectorAll('.theme-button');

    const themeStylesheet = document.getElementById('css-theme');


    function setActiveTheme(themeName) {
        
        themeStylesheet.href = `styles/${themeName}.css`;

        
        themeButtons.forEach(button => {
            if (button.dataset.theme === themeName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        
        localStorage.setItem('preferredTheme', themeName);
    }

    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            setActiveTheme(themeName);
        });
    });

    
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        setActiveTheme(savedTheme);
    }
    
    
});
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Allow numbers and operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    }

    // Handle Enter for calculate
    if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission if any
        calculate();
    }

    // Handle Backspace for deleting last character
    if (key === 'Backspace') {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    }

    // Handle Escape for clear
    if (key === 'Escape') {
        clearDisplay();
    }

    // Handle % and +/- if needed
    if (key === '%') {
        percentage();
    }
});



function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function percentage(){
    let value = parseFloat(display.value);
    if(!isNaN(value)){
        display.value=value/100;
        
    }
}

function negativeValue() {
    let expression = display.value;
    let match = expression.match(/(-?\d+\.?\d*)$/);

    if (match) {
        let number = match[0];
        let negated = number.startsWith('-') ? number.slice(1) : '-' + number;
        display.value = expression.slice(0, -number.length) + negated;
    }
}


function calculate() {
    try {
        let result = eval(display.value);

        
        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
