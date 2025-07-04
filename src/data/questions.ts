export interface Question {
  id?: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const questions = [
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
    explanation: "`localStorage.getItem(key)` is a method of the Web Storage API that allows you to retrieve a value from `localStorage`."
  },
  {
    id: 3,
    question: "Which command installs all dependencies listed in your package.json file?",
    options: ["npm start", "npm update", "npm install", "npm run"],
    answer: "npm install",
    explanation: "`npm install` reads your package.json and installs all listed dependencies."
  },
  {
    id: 4,
    question: "What does JSX stand for in React?",
    options: ["JavaScript Syntax Extension", "JavaScript XML", "JavaScript Extended", "JavaScript Markup"],
    answer: "JavaScript XML",
    explanation: "JSX stands for JavaScript XML. It's a syntax extension that allows you to write HTML-like code in your JavaScript files."
  },
  {
    id: 5,
    question: "Which React hook is used to manage state in functional components?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    answer: "useState",
    explanation: "`useState` is the hook used in React to manage the state of functional components."
  },
  {
    id: 6,
    question: "What is the main purpose of `useEffect` in React?",
    options: ["To update the state", "To manage side effects", "To handle events", "To render JSX"],
    answer: "To manage side effects",
    explanation: "`useEffect` is used to perform side effects in function components like data fetching, subscriptions, or manual DOM manipulation."
  },
  {
    id: 7,
    question: "In TypeScript, what does the `any` type represent?",
    options: ["A string", "Any type of value", "A number", "An undefined value"],
    answer: "Any type of value",
    explanation: "`any` is a TypeScript type that allows a variable to hold any type of value without any type checking."
  },
  {
    id: 8,
    question: "Which of these is the correct way to define an interface in TypeScript?",
    options: ["interface Person {}", "interface = Person {}", "type Person {}", "type Person = {}"],
    answer: "interface Person {}",
    explanation: "In TypeScript, `interface` is used to define the structure of an object. The correct syntax is `interface Person {}`."
  },
  {
    id: 9,
    question: "What does `npm start` do in a React project?",
    options: ["Installs dependencies", "Starts the development server", "Builds the production version", "Pushes changes to GitHub"],
    answer: "Starts the development server",
    explanation: "`npm start` starts the development server and opens the app in the browser for local development."
  },
  {
    id: 10,
    question: "What is the function of `useRef` in React?",
    options: ["It stores mutable data", "It manages side effects", "It handles routing", "It manages forms"],
    answer: "It stores mutable data",
    explanation: "`useRef` is a hook used to persist values across renders without causing a re-render of the component."
  },
  {
    id: 11,
    question: "Which command is used to create a new React app?",
    options: ["npm init react-app", "create-react-app", "npx create-react-app", "react-create-app"],
    answer: "npx create-react-app",
    explanation: "To create a new React app, you use the command `npx create-react-app`."
  },
  {
    id: 12,
    question: "How do you pass data to child components in React?",
    options: ["Props", "State", "Events", "Refs"],
    answer: "Props",
    explanation: "In React, you pass data to child components using `props`."
  },
  {
    id: 13,
    question: "What is the difference between `let` and `const` in JavaScript?",
    options: ["`let` can be reassigned; `const` cannot", "`let` is for constants; `const` is for variables", "`let` is block-scoped; `const` is function-scoped", "`let` cannot be reassigned; `const` can"],
    answer: "`let` can be reassigned; `const` cannot",
    explanation: "`let` allows reassignment of variables, while `const` creates variables whose values cannot be reassigned."
  },
  {
    id: 14,
    question: "What does the `git fetch` command do?",
    options: ["Updates your local repository", "Fetches changes from the remote repository", "Pushes changes to the remote repository", "Clones a repository"],
    answer: "Fetches changes from the remote repository",
    explanation: "`git fetch` retrieves changes from the remote repository without merging them into your local branch."
  },
  {
    id: 15,
    question: "Which command is used to update your local repository with the latest changes from the remote?",
    options: ["git pull", "git fetch", "git merge", "git update"],
    answer: "git pull",
    explanation: "`git pull` is used to fetch and merge changes from the remote repository into your local branch."
  },
  {
    id: 16,
    question: "What does the `git commit` command do?",
    options: ["Pushes changes to GitHub", "Commits changes to the local repository", "Creates a new branch", "Clones a repository"],
    answer: "Commits changes to the local repository",
    explanation: "`git commit` records changes to the local repository with a descriptive message."
  },
  {
    id: 17,
    question: "What does TypeScript provide that JavaScript doesn't?",
    options: ["Type annotations", "Classes", "Modules", "ES6 features"],
    answer: "Type annotations",
    explanation: "TypeScript provides static type annotations, which help developers catch errors during development."
  },
  {
    id: 18,
    question: "What is the purpose of React's `key` prop?",
    options: ["To update the state", "To uniquely identify elements in a list", "To bind events to elements", "To assign default values to props"],
    answer: "To uniquely identify elements in a list",
    explanation: "`key` is used to uniquely identify elements in a list, helping React optimize rendering by reusing elements."
  },
  {
    id: 19,
    question: "Which of these is used for routing in React applications?",
    options: ["React-Router", "Redux", "React-Context", "React-Navigation"],
    answer: "React-Router",
    explanation: "React-Router is the standard library used for adding navigation and routing to React applications."
  },
  {
    id: 20,
    question: "What is the use of the `useContext` hook in React?",
    options: ["To share state between components", "To handle routing", "To update the DOM", "To create new components"],
    answer: "To share state between components",
    explanation: "`useContext` is a hook used to share state between components without passing props manually."
  },
  // Add 30 more questions related to React, GitHub, TypeScript, etc.
  {
    id: 21,
    question: "What is JSX in React?",
    options: ["JavaScript XML", "JavaScript Style Extension", "JavaScript Extended Markup", "JavaScript Syntax Extension"],
    answer: "JavaScript XML",
    explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React."
  },
  {
    id: 22,
    question: "Which of these is the most common way to store data in React?",
    options: ["State", "Props", "DOM", "Refs"],
    answer: "State",
    explanation: "State is used to manage and store dynamic data in React components."
  },
  {
    id: 23,
    question: "How do you make an API request in React?",
    options: ["Using Axios", "Using Fetch API", "Both A and B", "None of the above"],
    answer: "Both A and B",
    explanation: "You can make API requests in React using Axios or the built-in Fetch API."
  },
  {
    id: 24,
    question: "What is the purpose of `useMemo` hook in React?",
    options: ["To optimize performance by memoizing results", "To trigger re-renders", "To fetch data", "To manage state"],
    answer: "To optimize performance by memoizing results",
    explanation: "`useMemo` is used to memoize expensive calculations, improving performance in React."
  },
  {
    id: 25,
    question: "Which of the following commands stages all files for a commit in Git?",
    options: ["git commit -m", "git add .", "git commit --amend", "git reset"],
    answer: "git add .",
    explanation: "`git add .` stages all changes in the current directory for commit."
  },
  {
    id: 26,
    question: "What does `git push` do in Git?",
    options: ["Pushes changes to the local repository", "Pushes changes to the remote repository", "Downloads changes from the remote repository", "Creates a new branch in the local repository"],
    answer: "Pushes changes to the remote repository",
    explanation: "`git push` is used to upload changes from your local repository to the remote repository (e.g., GitHub)."
  },
  {
    id: 27,
    question: "What is the main advantage of using `TypeScript` over `JavaScript`?",
    options: ["It has better performance", "It supports async/await", "It has static typing", "It has better compatibility with browsers"],
    answer: "It has static typing",
    explanation: "TypeScript offers static type checking, which helps catch errors during development and improves code quality."
  },
  {
    id: 28,
    question: "Which of these is the correct way to define a state in a functional React component?",
    options: ["const [state, setState] = useState(initialState);", "state = useState(initialState);", "const state = useState(initialState);", "useState(state, setState);"],
    answer: "const [state, setState] = useState(initialState);",
    explanation: "`useState` is a hook that allows you to add state to functional components. The syntax involves using an array destructuring."
  },
  {
    id: 29,
    question: "What is the default state of a new React app created with `create-react-app`?",
    options: ["An empty state object", "A `null` value for all variables", "A count of 0", "A component with a default render method"],
    answer: "An empty state object",
    explanation: "The default state of a new React app is typically an empty state object or a component without state until you set it using `useState`."
  },
  {
    id: 30,
    question: "Which React lifecycle method is used for fetching data when a component mounts?",
    options: ["componentDidMount", "componentWillMount", "useEffect", "componentDidUpdate"],
    answer: "useEffect",
    explanation: "`useEffect` is used in functional components to perform side effects, such as data fetching, when the component mounts."
  },
  {
    id: 31,
    question: "What is the default port for a React app created using `create-react-app`?",
    options: ["8080", "3000", "5000", "4000"],
    answer: "3000",
    explanation: "By default, `create-react-app` runs on port 3000 in development mode."
  },
  {
    id: 32,
    question: "Which React hook is used to handle form inputs?",
    options: ["useRef", "useState", "useEffect", "useReducer"],
    answer: "useState",
    explanation: "The `useState` hook is typically used to store and update the state for form input values in React."
  },
  {
    id: 33,
    question: "In TypeScript, how do you define a function type that takes two numbers and returns a number?",
    options: ["(a: number, b: number) => number", "(number, number) => number", "number => (a: number, b: number)", "(a, b) => number"],
    answer: "(a: number, b: number) => number",
    explanation: "In TypeScript, function types are defined by specifying the parameter types and the return type, e.g., `(a: number, b: number) => number`."
  },
  {
    id: 34,
    question: "Which React feature helps with managing global state across multiple components?",
    options: ["Context API", "Redux", "useState", "useReducer"],
    answer: "Context API",
    explanation: "The Context API in React allows you to share values like global state across components without passing props manually."
  },
  {
    id: 35,
    question: "Which Git command is used to check the status of the current repository?",
    options: ["git status", "git check", "git diff", "git log"],
    answer: "git status",
    explanation: "`git status` shows the current state of the repository, including changes staged for commit and files that are untracked."
  },
  {
    id: 36,
    question: "Which of the following is used for code versioning on GitHub?",
    options: ["git push", "git clone", "git commit", "All of the above"],
    answer: "All of the above",
    explanation: "All of these commands are used as part of the version control process on GitHub and other Git-based platforms."
  },
  {
    id: 37,
    question: "What is `useEffect` commonly used for in React?",
    options: ["Fetching data", "Handling events", "Updating state", "Rendering JSX"],
    answer: "Fetching data",
    explanation: "`useEffect` is commonly used to handle side effects, such as fetching data from an API when the component mounts."
  },
  {
    id: 38,
    question: "Which of the following is the correct way to create a functional component in React?",
    options: ["function App() {}", "const App = () => {}", "function App() : JSX.Element {}", "All of the above"],
    answer: "All of the above",
    explanation: "All of the given syntaxes can be used to create functional components in React."
  },
  {
    id: 39,
    question: "Which command is used to push changes to a remote repository in Git?",
    options: ["git pull", "git push", "git fetch", "git commit"],
    answer: "git push",
    explanation: "`git push` is used to push commits from your local repository to the remote repository."
  },
  {
    id: 40,
    question: "What is the purpose of the `React.Fragment` component?",
    options: ["It wraps multiple elements without adding extra nodes to the DOM", "It helps manage state", "It defines the main component structure", "It renders JSX inside a loop"],
    answer: "It wraps multiple elements without adding extra nodes to the DOM",
    explanation: "`React.Fragment` is used to group multiple elements without adding an extra DOM element, like a `div`."
  },
  {
    id: 41,
    question: "What is the syntax for destructuring an array in JavaScript?",
    options: ["const [a, b] = [1, 2];", "const a = [1, 2];", "const [a, b] = 1, 2;", "let a = [1, 2];"],
    answer: "const [a, b] = [1, 2];",
    explanation: "In JavaScript, array destructuring is done by assigning values from an array into variables using the `[]` syntax."
  },
  {
    id: 42,
    question: "What does `git reset` do in Git?",
    options: ["Removes changes from the staging area", "Deletes a branch", "Reverts commits", "Clones a repository"],
    answer: "Removes changes from the staging area",
    explanation: "`git reset` is used to remove changes from the staging area and unstage them."
  },
  {
    id: 43,
    question: "In TypeScript, what does the `never` type represent?",
    options: ["Any value", "A type that never occurs", "A type with no value", "A void type"],
    answer: "A type that never occurs",
    explanation: "`never` is a TypeScript type that represents values that will never occur, such as in a function that always throws an error."
  },
  {
    id: 44,
    question: "Which React hook is used for managing complex state logic across multiple components?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    answer: "useReducer",
    explanation: "`useReducer` is used to manage more complex state logic, especially in situations where state depends on the previous state."
  },
  {
    id: 45,
    question: "What is `git merge` used for?",
    options: ["Merges two branches", "Pushes changes to GitHub", "Clones a repository", "Fetches new updates from a remote repository"],
    answer: "Merges two branches",
    explanation: "`git merge` is used to merge the changes from one branch into another."
  },
  {
    id: 46,
    question: "Which of the following is used for type-checking in TypeScript?",
    options: ["Type annotations", "Interfaces", "Type aliases", "All of the above"],
    answer: "All of the above",
    explanation: "In TypeScript, type-checking is done using type annotations, interfaces, and type aliases."
  },
  {
    id: 47,
    question: "How do you update a React component's state?",
    options: ["By directly modifying the state", "By using `setState()` in a class component", "By using `useState()` hook in a functional component", "All of the above"],
    answer: "All of the above",
    explanation: "State in React can be updated in both class components (using `setState()`) and functional components (using `useState()`)."
  },
  {
    id: 48,
    question: "What is the purpose of the `type` keyword in TypeScript?",
    options: ["Defines variables", "Defines functions", "Creates type aliases", "Defines classes"],
    answer: "Creates type aliases",
    explanation: "`type` in TypeScript is used to create aliases for existing types."
  },
  {
    id: 49,
    question: "Which Git command is used to display the commit history?",
    options: ["git status", "git log", "git history", "git show"],
    answer: "git log",
    explanation: "`git log` is used to show the commit history of the repository."
  },
  {
    id: 50,
    question: "What is `useRef` used for in React?",
    options: ["Accessing DOM elements", "Managing state", "Performing side effects", "Creating context"],
    answer: "Accessing DOM elements",
    explanation: "`useRef` is a React hook that allows you to access and interact with DOM elements directly."
  }

];
