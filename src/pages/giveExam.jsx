import { useState } from "react";

export default function GiveExam({ exam }) {
  const [answer, setAnswer] = useState(null);
  const question = exam.questions[0];

  return (
    <div className="card exam-attempt">
      <h2>{exam.title}</h2>
      <p className="question">{question.text}</p>

      {question.options.map((opt, i) => (
        <label key={i} className="option">
          <input
            type="radio"
            name="answer"
            onChange={() => setAnswer(i)}
          />
          {opt}
        </label>
      ))}

      <button disabled={answer === null}>Submit Exam</button>
    </div>
  );
}
