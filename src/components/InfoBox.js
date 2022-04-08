import React from "react";
import { Link } from "react-router-dom";

const InfoBox = () => {
  return (
    <div className="info_box">
      <div className="info-title">
        <span>Some Rules of this Quiz</span>
      </div>
      <div className="info-list">
        <div className="info">1. There are 05 questions</div>
        <div className="info">
          2. You will have only <span>10 seconds</span> per each question.
        </div>
        <div className="info">
          3. Once you select your answer, it can't be undone.
        </div>
        <div className="info">
          4. You can't select any option once time goes off.
        </div>
        <div className="info">
          5. You can't exit from the Quiz while you're playing.
        </div>
        <div className="info">
          6. You'll get points on the basis of your correct answers.
        </div>
      </div>
      <div className="buttons">
        <Link to="/">
          <button className="quit">Exit Quiz</button>
        </Link>
        <Link to="/quiz">
          <button className="restart">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default InfoBox;
