import React from "react";

function QuestionList() {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <ul>{listQuestions}</ul>
    </section>
  );
}

export default QuestionList;
