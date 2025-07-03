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
}




  
];
