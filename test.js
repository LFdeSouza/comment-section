const test = {
  comments: [
    { id: 1, score: 0 },
    { id: 2, score: 0 },
  ],
};

const updateScore = (index, operation, state) => {
  const comments = state.comments;
  comments[index].score++;
  return comments;
};

console.log(updateScore(1, "subtract", test));
