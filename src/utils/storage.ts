const SCORE_KEY = "quiz_score";

export const saveScore = (score: number) => {
  localStorage.setItem(SCORE_KEY, JSON.stringify(score));
};

export const getScore = (): number => {
  const saved = localStorage.getItem(SCORE_KEY);
  return saved ? JSON.parse(saved) : 0;
};
