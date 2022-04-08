import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoBox from "./components/InfoBox";
import QuizBox from "./components/QuizBox";
import Result from "./components/Result";
import Start from "./components/Start";

function App() {
  const [fscore, setFscore] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="info" element={<InfoBox />} />
        <Route
          path="quiz"
          element={<QuizBox fscore={fscore} setFscore={setFscore} />}
        />
        <Route
          path="result"
          element={<Result fscore={fscore} setFscore={setFscore} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
