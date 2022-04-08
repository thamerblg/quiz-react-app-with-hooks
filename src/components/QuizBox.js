import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../data";
import { FaCheck, FaTimes } from "react-icons/fa";

const QuizBox = ({ fscore, setFscore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("");
  const [disable, setDisable] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [counter, setCounter] = React.useState(10);
  const [iconDislay, setIconDislay] = useState("none");

  const hundelOptionSelected = (item, e) => {
    setSelectedAnswer(item);
    setOptionSelected(true);
    setDisable(true);

    clearInterval(intervalRef.current);

    `${questions[currentQuestion].answer}` === item
      ? setFscore(fscore + 1)
      : setFscore(fscore);

    setClassName(
      `${questions[currentQuestion].answer}` === item ? "correct" : "incorrect"
    );
    setIconDislay("block");
  };

  const hundelChangeQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setCounter(10);
    setDisable(false);
    startDec();
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setOptionSelected(false);
      setDisable(false);
    }
    if (nextQuestion === questions.length - 1) {
      setQuizCompleted(true);
    }
  };

  let intervalRef = useRef();

  const decreaseNum = () => {
    setCounter((prev) => prev > 0 && prev - 1);
  };

  const startDec = () => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => {
      clearInterval(intervalRef.current);
      setDisable(true);
    };
  };

  useEffect(
    () => {
      startDec();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="quiz_box">
      <header>
        <div className="title">Awesome Quiz Application</div>
        <div className="timer">
          <div className="time_left_txt">Time Left</div>
          <div className="timer_sec">{counter || 0}</div>
        </div>
        <div className="time_line"></div>
      </header>
      <section>
        <div className="que_text">
          {/* Here I've inserted question from JavaScript */}
          <span>
            {questions[currentQuestion].numb}.{" "}
            {questions[currentQuestion].question}
          </span>
        </div>
        <div className="option_list">
          {/* Here I've inserted options from JavaScript */}

          {questions[currentQuestion].options.map((item, index) => (
            <div
              className={`option 
              ${disable || !counter ? "disabled" : ""}
              ${selectedAnswer === item ? className : ""}`}
              key={index}
              onClick={(e) => hundelOptionSelected(item, e)}
            >
              <span>{item}</span>
              <div
                className={`icon
                ${questions[currentQuestion].answer === item ? "tick" : "cross"}
                ${selectedAnswer === item ? iconDislay : ""}`}
              >
                {questions[currentQuestion].answer === item ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer of Quiz Box */}
      <footer>
        <div className="total_que">
          {/* Here I've inserted Question Count Number from JavaScript */}
          <span>
            <p>{questions[currentQuestion].numb}</p> of <p>5</p> Questions
          </span>
        </div>
        {quizCompleted ? (
          <Link to="/result">
            <button
              className={`next_btn ${optionSelected || !counter ? "show" : ""}`}
            >
              Finish
            </button>
          </Link>
        ) : (
          <button
            className={`next_btn ${optionSelected || !counter ? "show" : ""}`}
            onClick={hundelChangeQuestion}
          >
            Next Question
          </button>
        )}
      </footer>
    </div>
  );
};

export default QuizBox;
