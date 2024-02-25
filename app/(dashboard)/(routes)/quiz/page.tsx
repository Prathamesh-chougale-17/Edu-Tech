import React from "react";

const QuizPage = () => {
  return (
    <div>
      <iframe
        src="https://quizmify.vercel.app/quiz"
        className="border-blue-400"
        name="myiFrame"
        scrolling="no"
        height="700px"
        width="1200px"
      ></iframe>
    </div>
  );
};

export default QuizPage;
