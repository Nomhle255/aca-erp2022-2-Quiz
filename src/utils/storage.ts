const SCORE_KEY = "quiz_score";

export const saveScore = (score: number) => {
  localStorage.setItem(SCORE_KEY, JSON.stringify(score));
};

export const getScore = (): number => {
  const data = localStorage.getItem(SCORE_KEY);
  return data ? JSON.parse(data) : 0;
};
