

// Get reference to the calculator display element
const display = document.getElementById('display');

document.addEventListener('DOMContentLoaded', function() {
    // Select all theme switcher buttons
    const themeButtons = document.querySelectorAll('.theme-button');

    // Get the <link> element that loads the theme stylesheet
    const themeStylesheet = document.getElementById('css-theme');

    /**
     * Set the active theme by updating the stylesheet and button states
     * @param {string} themeName - The name of the theme to apply
     */
    function setActiveTheme(themeName) {
        // Update the href of the stylesheet to load the selected theme
        themeStylesheet.href = `styles/${themeName}.css`;

        // Highlight the active theme button and remove highlight from others
        themeButtons.forEach(button => {
            if (button.dataset.theme === themeName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Save the selected theme in localStorage for persistence
        localStorage.setItem('preferredTheme', themeName);
    }

    // Add click event listeners to all theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            setActiveTheme(themeName);
        });
    });

    // Load the previously saved theme from localStorage (if any)
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        setActiveTheme(savedTheme);
    }
});

// Handle keyboard input for calculator functionality
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Allow numbers and basic operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    }

    // Handle Enter key for calculation
    if (key === 'Enter') {
        event.preventDefault(); // Prevent accidental form submission
        calculate();
    }

    // Handle Backspace for deleting last character
    if (key === 'Backspace') {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    }

    // Handle Escape key to clear display
    if (key === 'Escape') {
        clearDisplay();
    }

    // Handle percentage calculation
    if (key === '%') {
        percentage();
    }
});

/**
 * Append input to the calculator display
 * @param {string} input - The character to append
 */
function appendToDisplay(input) {
    display.value += input;
}

/**
 * Clear the calculator display
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Convert current value to percentage
 */
function percentage() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100;
    }
}

/**
 * Toggle the sign (+/-) of the last number in the expression
 */
function negativeValue() {
    let expression = display.value;
    let match = expression.match(/(-?\d+\.?\d*)$/);

    if (match) {
        let number = match[0];
        let negated = number.startsWith('-') ? number.slice(1) : '-' + number;
        display.value = expression.slice(0, -number.length) + negated;
    }
}

/**
 * Calculate the result of the expression in the display
 */
function calculate() {
    try {
        let result = eval(display.value);

        // Handle invalid or infinite results
        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}