import React from "react";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { questions } from "../data";

const Result = ({ fscore, setFscore }) => {
  return (
    <div className="result_box">
      <div className="icon">
        <FaCrown />
      </div>
      <div className="complete_text">You've completed the Quiz!</div>
      <div className="score_text">
        {/*<!-- Here I've inserted Score Result from JavaScript -->*/}
        <span>
          and nice , You got <p>{fscore}</p> out of <p>{questions.length}</p>
        </span>
      </div>
      <div className="buttons">
        <Link to="/quiz">
          <button
            className="restart"
            onClick={() => {
              setFscore(0);
            }}
          >
            Replay Quiz
          </button>
        </Link>
        <Link to="/">
          <button className="quit">Quit Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
