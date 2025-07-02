export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  selectedAnswer?: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the git command that downloads your repository from GitHub to your computer?",
    options: ["git push", "git commit", "git fork", "git clone"],
    answer: "git clone",
    explanation: "Used to clone repositories. You used this to clone your fork to local machine."
  },
  {
  id: 2,
    question: "How do you access a value stored in the browser's local storage?",
    options: ["localStorage.setItem()", "localStorage.getItem()", "sessionStorage.getItem()", "document.cookie"],
    answer: "localStorage.getItem()",
    explanation: "`localStorage.getItem(key)` is a method of the Web Storage API that allows you to retrieve a value from `localStorage` using a specified key. In this quiz, it's used to retrieve the previously saved quiz score, for example, `localStorage.getItem('quizScore')`."
  },
  {
    id: 3,
    question: "Which command installs all dependencies listed in your package.json file?",
    options: ["npm start", "npm update", "npm install", "npm run"],
    answer: "npm install",
    explanation: "`npm install` reads your package.json and installs all listed dependencies.",
    selectedAnswer: ""
  },
  {
    id: 4,
    question: "Which React prop type defines the shape of a question in the quiz app?",
    options: ["string", "number", "QuestionType (custom interface)", "boolean"],
    answer: "QuestionType (custom interface)",
    explanation: "Defining a type/interface helps structure the question data consistently."
  },
  {
    id: 5,
    question: "Which command runs your React project in development mode?",
    options: ["npm install", "npm build", "npm test", "npm start"],
    answer: "npm start",
    explanation: "`npm start` launches the development server and opens your app in the browser.",
    selectedAnswer: ""
  },
  {
    id: 6,
    question: "Which command is used to navigate into a specific folder in the terminal?",
    options: ["ls foldername", "open foldername", "cd foldername", "mkdir foldername"],
    answer: "cd foldername",
    explanation: "`cd foldername` stands for 'change directory'. It's used to move into a specific folder. In this project, you used it to enter your project folder before running commands like `npm install`.",
    selectedAnswer: ""
},
{
  id: 7,
  question: "How do you store data in the browser's local storage?",
  options: [
    "localStorage.setItem('key', 'value')",
    "localStorage.getItem('key', 'value')",
    "sessionStorage.set('key', 'value')",
    "localStorage.save('key', 'value')"
  ],
  answer: "localStorage.setItem('key', 'value')",
  explanation: "`localStorage.setItem('key', 'value')` is the correct method for saving data to the browser’s local storage. In this app, it is used to save the quiz score locally so it persists after refresh.",
  selectedAnswer: ""
},
{
  "id": 8,
    "question": "What command initializes a new React project using Create React App?",
    "options": [
      "npm start",
      "npm create-react-app",
      "npx create-react-app my-app",
      "npm init react"
    ],
    "answer": "npx create-react-app my-app",
    "explanation": "The command 'npx create-react-app my-app' initializes a new React project."
},
{

    "id": 9,
    "question": "Which TypeScript feature helps define the shape of objects?",
    "options": [
      "Classes",
      "Interfaces",
      "Functions",
      "Variables"
    ],
    "answer": "Interfaces",
    "explanation": "Interfaces are used in TypeScript to define object structures and types."
},
  {
    "id": 10,
    "question": "What is the purpose of the React 'key' prop when rendering lists?",
    "options": [
      "To style list items",
      "To uniquely identify elements for efficient rendering",
      "To add event listeners",
      "To enable animations"
    ],
    "answer": "To uniquely identify elements for efficient rendering",
    "explanation": "Keys help React identify which items have changed, been added, or removed."
  },
  {
    "id": 11,
    "question": "Which CSS property smooths the font on Apple devices?",
    "options": [
      "font-smooth",
      "-webkit-font-smoothing",
      "text-smoothing",
      "font-rendering"
    ],
    "answer": "-webkit-font-smoothing",
    "explanation": "The '-webkit-font-smoothing' CSS property controls font antialiasing on Apple devices."
  },
  {
    "id": 12,
    "question": "In React, what is the purpose of the useEffect hook?",
    "options": [
      "To manage component state",
      "To perform side effects after render",
      "To handle form submissions",
      "To create reusable components"
    ],
    "answer": "To perform side effects after render",
    "explanation": "useEffect is used to run side effects such as data fetching or DOM manipulation after rendering."
  },
  {
    "id": 13,
    "question": "How do you add styles scoped to a specific React component?",
    "options": [
      "Using global CSS",
      "Using inline styles or CSS modules",
      "Editing the HTML file directly",
      "Using external style sheets only"
    ],
    "answer": "Using inline styles or CSS modules",
    "explanation": "Inline styles and CSS modules scope styles to individual components, avoiding global conflicts."
  },
  {
    "id": 14,
    "question": "What command runs the React development server after project setup?",
    "options": [
      "npm start",
      "npm run build",
      "npm install",
      "npm test"
    ],
    "answer": "npm start",
    "explanation": "'npm start' starts the development server for React apps."
  },
  {
    "id": 15,
    "question": "How can you save user quiz progress in the browser?",
    "options": [
      "Using cookies",
      "Using localStorage",
      "Using server database",
      "Using CSS"
    ],
    "answer": "Using localStorage",
    "explanation": "localStorage allows you to save data in the browser across sessions."
  },
  {
    "id": 16,
    "question": "Which React method allows a parent component to control child behavior?",
    "options": [
      "Props",
      "State",
      "Context API",
      "Refs"
    ],
    "answer": "Props",
    "explanation": "Props allow parents to pass data and callbacks to child components."
  },
  {
    "id": 17,
    "question": "What is the effect of setting the disabled attribute on a button?",
    "options": [
      "Button is highlighted",
      "Button is hidden",
      "Button becomes unclickable",
      "Button triggers alert"
    ],
    "answer": "Button becomes unclickable",
    "explanation": "The disabled attribute makes the button inactive and unclickable."
  },
  {
    "id": 18,
    "question": "What tool automates running tests and deployment pipelines?",
    "options": [
      "GitHub",
      "CircleCI",
      "npm",
      "React"
    ],
    "answer": "CircleCI",
    "explanation": "CircleCI is a continuous integration tool that automates testing and deployment."
  },
  {
    "id": 19,
    "question": "Which React file extension is used for TypeScript with JSX?",
    "options": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "answer": ".tsx",
    "explanation": "Files with .tsx extension contain TypeScript with JSX syntax."
  },
  {
    "id": 20,
    "question": "What command installs all dependencies listed in package.json?",
    "options": [
      "npm start",
      "npm install",
      "npm run build",
      "npm test"
    ],
    "answer": "npm install",
    "explanation": "'npm install' installs all project dependencies."
  },
  {
    "id": 21,
    "question": "How do you prevent a user from proceeding without selecting an answer in React?",
    "options": [
      "Disable Next button until an answer is selected",
      "Show alert on Next button click",
      "Allow Next button anytime",
      "Hide options"
    ],
    "answer": "Disable Next button until an answer is selected",
    "explanation": "Disabling the Next button prevents moving forward without answering."
  },
  {
    "id": 22,
    "question": "How do you conditionally apply a CSS class to a React element?",
    "options": [
      "Using the class attribute",
      "Using the className attribute with a conditional expression",
      "Using inline styles only",
      "Using an id attribute"
    ],
    "answer": "Using the className attribute with a conditional expression",
    "explanation": "className can be set conditionally in React JSX to apply styles dynamically."
  },
  {
    id: 23,
    question: "What is the git command that downloads your repository from GitHub to your computer?",
    options: ["git push", "git commit", "git fork", "git clone"],
    answer: "git clone",
    explanation: "Used to clone repositories. You used this to clone your fork to local machine."
  },
  {
    id: 24,
    question: "What command initializes a new React project using Create React App?",
    options: [
      "npm start",
      "npm create-react-app",
      "npx create-react-app my-app",
      "npm init react"
    ],
    answer: "npx create-react-app my-app",
    explanation: "The command 'npx create-react-app my-app' initializes a new React project."
  },
  {
    id: 25,
    question: "Which TypeScript feature helps define the shape of objects?",
    options: [
      "Classes",
      "Interfaces",
      "Functions",
      "Variables"
    ],
    answer: "Interfaces",
    explanation: "Interfaces are used in TypeScript to define object structures and types."
  },
  {
    id: 26,
    question: "What is the purpose of the React 'key' prop when rendering lists?",
    options: [
      "To style list items",
      "To uniquely identify elements for efficient rendering",
      "To add event listeners",
      "To enable animations"
    ],
    answer: "To uniquely identify elements for efficient rendering",
    explanation: "Keys help React identify which items have changed, been added, or removed."
  },
  {
    id: 27,
    question: "Which CSS property smooths the font on Apple devices?",
    options: [
      "font-smooth",
      "-webkit-font-smoothing",
      "text-smoothing",
      "font-rendering"
    ],
    answer: "-webkit-font-smoothing",
    explanation: "The '-webkit-font-smoothing' CSS property controls font antialiasing on Apple devices."
  },
  {
    id: 28,
    question: "In React, what is the purpose of the useEffect hook?",
    options: [
      "To manage component state",
      "To perform side effects after render",
      "To handle form submissions",
      "To create reusable components"
    ],
    answer: "To perform side effects after render",
    explanation: "useEffect is used to run side effects such as data fetching or DOM manipulation after rendering."
  },
  {
    id: 29,
    question: "How do you add styles scoped to a specific React component?",
    options: [
      "Using global CSS",
      "Using inline styles or CSS modules",
      "Editing the HTML file directly",
      "Using external style sheets only"
    ],
    answer: "Using inline styles or CSS modules",
    explanation: "Inline styles and CSS modules scope styles to individual components, avoiding global conflicts."
  },
  {
    id: 30,
    question: "What command runs the React development server after project setup?",
    options: [
      "npm start",
      "npm run build",
      "npm install",
      "npm test"
    ],
    answer: "npm start",
    explanation: "'npm start' starts the development server for React apps."
  },
  {
    id: 31,
    question: "How can you save user quiz progress in the browser?",
    options: [
      "Using cookies",
      "Using localStorage",
      "Using server database",
      "Using CSS"
    ],
    answer: "Using localStorage",
    explanation: "localStorage allows you to save data in the browser across sessions."
  },
  {
    id: 32,
    question: "Which React method allows a parent component to control child behavior?",
    options: [
      "Props",
      "State",
      "Context API",
      "Refs"
    ],
    answer: "Props",
    explanation: "Props allow parents to pass data and callbacks to child components."
  },
  {
    id: 33,
    question: "What is the effect of setting the disabled attribute on a button?",
    options: [
      "Button is highlighted",
      "Button is hidden",
      "Button becomes unclickable",
      "Button triggers alert"
    ],
    answer: "Button becomes unclickable",
    explanation: "The disabled attribute makes the button inactive and unclickable."
  },
  {
    id: 34,
    question: "What tool automates running tests and deployment pipelines?",
    options: [
      "GitHub",
      "CircleCI",
      "npm",
      "React"
    ],
    answer: "CircleCI",
    explanation: "CircleCI is a continuous integration tool that automates testing and deployment."
  },
  {
    id: 35,
    question: "Which React file extension is used for TypeScript with JSX?",
    options: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    answer: ".tsx",
    explanation: "Files with .tsx extension contain TypeScript with JSX syntax."
  },
  {
    id: 36,
    question: "What command installs all dependencies listed in package.json?",
    options: [
      "npm start",
      "npm install",
      "npm run build",
      "npm test"
    ],
    answer: "npm install",
    explanation: "'npm install' installs all project dependencies."
  },
  {
    id: 37,
    question: "How do you prevent a user from proceeding without selecting an answer in React?",
    options: [
      "Disable Next button until an answer is selected",
      "Show alert on Next button click",
      "Allow Next button anytime",
      "Hide options"
    ],
    answer: "Disable Next button until an answer is selected",
    explanation: "Disabling the Next button prevents moving forward without answering."
  },
  {
    id: 38,
    question: "What is the React hook used to manage state inside a functional component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
    explanation: "useState is used to add state to functional components, like tracking selected answers."
  },
  {
    id: 39,
    question: "How do you pass data from a parent component to a child component in React?",
    options: ["Using state", "Using props", "Using context", "Using hooks"],
    answer: "Using props",
    explanation: "Props are used to pass data and event handlers down the component tree."
  },
  {
    id: 40,
    question: "What does the map() function do in React JSX?",
    options: [
      "Creates a new array with modified elements",
      "Mutates the original array",
      "Filters elements from an array",
      "Sorts elements in an array"
    ],
    answer: "Creates a new array with modified elements",
    explanation: "map() is used to render lists of components from data arrays."
  },
  {
    id: 41,
    question: "Which HTML element is best suited for grouping quiz answer options?",
    options: ["<div>", "<ul>", "<span>", "<input>"],
    answer: "<ul>",
    explanation: "An unordered list (<ul>) semantically groups list items (<li>) like quiz options."
  },
  {
    id: 42,
    question: "How can you conditionally disable a button in React?",
    options: [
      "Using the enabled attribute",
      "Using the disabled attribute and a boolean expression",
      "Using inline CSS",
      "Using readonly attribute"
    ],
    answer: "Using the disabled attribute and a boolean expression",
    explanation: "The disabled attribute can be dynamically set to disable buttons."
  },
  {
    id: 43,
    question: "What does this line do in React?\n\n<button onClick={() => onAnswer(option)}>{option}</button>",
    options: [
      "Calls onAnswer when the button is clicked, passing option",
      "Immediately calls onAnswer when rendering",
      "Prevents the button from working",
      "Binds option to the button text only"
    ],
    answer: "Calls onAnswer when the button is clicked, passing option",
    explanation: "The arrow function defers the call until the click event."
  },
  {
    id: 44,
    question: "How do you store a quiz score locally in the browser?",
    options: [
      "localStorage.setItem('score', '10')",
      "sessionStorage.getItem('score')",
      "cookie.set('score', 10)",
      "window.save('score', 10)"
    ],
    answer: "localStorage.setItem('score', '10')",
    explanation: "localStorage.setItem saves data persistently in the browser."
  },
  {
    id: 45,
    question: "Which React hook smooths font rendering?",
    options: ["useFontSmoothing", "None, font smoothing is done via CSS", "useEffect", "useLayoutEffect"],
    answer: "None, font smoothing is done via CSS",
    explanation: "CSS properties like -webkit-font-smoothing handle font rendering."
  },
  {
    id: 46,
    question: "How do you create a new file in Windows command line?",
    options: ["mkdir file.txt", "type nul > file.txt", "touch file.txt", "new file.txt"],
    answer: "type nul > file.txt",
    explanation: "This creates an empty file in Windows CMD."
  },
  {
    id: 47,
    question: "In CSS, which selector targets all <button> elements?",
    options: [".button", "button", "#button", "btn"],
    answer: "button",
    explanation: "Selecting by element name targets all <button> tags."
  },
  {
    id: 48,
    question: "Which React event handler listens for button clicks?",
    options: ["onClick", "onChange", "onHover", "onSelect"],
    answer: "onClick",
    explanation: "onClick handles mouse click events."
  },
  {
    id: 49,
    question: "What does the disabled attribute on a button do?",
    options: [
      "Enables the button",
      "Prevents user interaction and greys out the button",
      "Makes button text bold",
      "Changes the button color"
    ],
    answer: "Prevents user interaction and greys out the button",
    explanation: "Disabled buttons can’t be clicked or focused."
  },
  {
    id: 50,
    question: "How do you highlight a selected quiz option in CSS?",
    options: [
      "Use a selected class and style it differently",
      "Use an inline style every time",
      "Change the button type to submit",
      "Use the HTML highlight tag"
    ],
    answer: "Use a selected class and style it differently",
    explanation: "Adding/removing classes is the React way to style UI state changes."
  }





  
];
