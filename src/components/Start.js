import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start_btn">
      <Link to="/info">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Start;
