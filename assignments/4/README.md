Assignment 4: The Exciting World of JavaScript

## Part 0 - Environment Setup
This is Part 0 of Assignment 4: "The Exciting World of JavaScript", focused on setting up your JavaScript development environment. While this part will not be graded, it's essential to complete it before moving on to the graded portions of the assignment. The goal is to ensure everyone has a working JavaScript environment before we dive deeper into programming concepts.

### Required Tasks

#### 1. Installing Node.js
If you don't already have Node.js installed:

- Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
- Download the LTS (Long Term Support) version recommended for most users
- Follow the installation instructions for your operating system:
  - **Windows**: Run the downloaded installer and follow the prompts
  - **Mac**: Run the downloaded pkg installer or use Homebrew with `brew install node`
  - **Linux**: Use your distribution's package manager (e.g., `apt install nodejs npm` for Ubuntu)
- Verify installation by opening a terminal/command prompt and typing:
  ```
  node -v
  npm -v
  ```
  Both commands should display version numbers if installation was successful

#### 2. "Hello JavaScript" Program
Create a simple JavaScript file (`/assignments/assignment-4/hello.js`) that:

- Outputs "Hello, JavaScript!" to the console
- Includes at least one variable
- Includes at least one function
- Uses at least one ES6+ feature (arrow function, template literal, etc.)

**Example:**
```javascript
// hello.js
const greeting = "JavaScript";

const createMessage = (name) => {
    return `Hello, ${name}!`;
};

console.log(createMessage(greeting));
```
Run your JavaScript file using Node.js:

- Open a terminal/command prompt
- Navigate to the directory containing your hello.js file
- Run the file with:
  ```
  node hello.js
  ```
You should see your output message in the terminal

#### 3. Browser Experiment
Create a simple HTML page `/assignments/assignment-4/index.html` that:

- Links to your JavaScript file
- Contains a button that, when clicked, calls a function from your JavaScript file
- Displays some dynamic content on the page when the button is clicked

**Example HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Practice</title>
</head>
<body>
    <h1>JavaScript Week 0 Practice</h1>
    <button id="greetButton">Click Me!</button>
    <div id="output"></div>
    
    <script src="hello.js"></script>
    <script>
        document.getElementById("greetButton").addEventListener("click", function() {
            document.getElementById("output").textContent = createMessage("JavaScript");
        });
    </script>
</body>
</html>
```

#### 4. Explore Browser DevTools
- Open your HTML page in Chrome or Firefox
- Open the developer tools (F12)
- Experiment with:
  - Running JavaScript in the console
  - Inspecting DOM elements
  - Setting breakpoints in your JavaScript code
  - Viewing network requests

#### 5. Enable GitHub Pages for Your Repository
Set up GitHub Pages to host your HTML and JavaScript files:

- Push your files to your GitHub repository:
  ```
  git add .
  git commit -m "Add JavaScript assignment files"
  git push
  ```
- Enable GitHub Pages:
  - Go to your repository on GitHub
  - Click on "Settings"
  - Scroll down to the "GitHub Pages" section
  - Under "Source", select "main branch"
  - Click "Save"
- Wait a few minutes for your site to deploy

Visit your GitHub Pages URL to verify your HTML page works correctly online.

---

## Part 1 - JS Calculator
### Overview
Create a fully functional calculator that mimics the design and functionality of the iOS/Android calculator app.

### Requirements
- Basic operations: addition, subtraction, multiplication, division
- Clear functionality (AC button)
- Positive/negative toggle
- Percentage calculation
- Decimal point input
- Equals operation

### UI Requirements
- Grid-based layout similar to iOS calculator
- Display area for input/result
- Buttons for numbers, operations, utilities
- Styling: dark background, light text, orange operation buttons, gray utility buttons

### Technical Requirements
- Vanilla JavaScript (no frameworks)
- Responsive design
- Keyboard support
- Handle edge cases
- Use ES6+ features

### Steps
1. HTML structure
2. CSS styling
3. JavaScript functionality

---

## Part 2 - Portfolio Integration
Integrate your calculator into your portfolio from Assignment 3.

### Requirements
- Add calculator as a project in your portfolio
- Include title, description, screenshot, technologies used
- Navigation between portfolio and calculator
- Deploy updated portfolio to GitHub Pages

---

## Directory Structure
```
assignments/
└── 4/
    ├── README.md
    ├── SUBMISSION.md
    ├── index.html
    ├── calculator.html
    ├── styles/
    │   ├── styles.css
    │   └── calculator.css
    ├── scripts/
    │   ├── hello.js
    │   ├── script.js
    │   └── calculator.js
    └── images/
        ├── profile.jpg
        └── calculator-preview.jpg
```

---

## Submission
- GitHub repository link
- GitHub Pages link
- SUBMISSION.md with:
  - Name and student ID
  - Links
  - Description (100-200 words)
  - Challenges and solutions
  - Extra features
  - Resources used

---

## Evaluation Criteria
- Functionality
- Integration
- Code quality
- Design and usability
- Documentation

---

## Bonus Features
- Theme Switcher (+10 points)
- Memory Functions (+10 points)

---

## Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
