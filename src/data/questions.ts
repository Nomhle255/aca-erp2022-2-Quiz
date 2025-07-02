export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "What is the git command that downloads your repository from GitHub to your computer?",
    options: ["git push", "git commit", "git fork", "git clone"],
    answer: "git clone",
    explanation: "Used to clone repositories. You likely used this to set up your project."
  },
  // Add more questions here...
];
