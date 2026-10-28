import { ChevronDown } from "lucide-react";

export function QuestionList({ questions }) {
  return (
    <div className="question-list">
      {questions.map(([question, answer]) => (
        <details key={question}>
          <summary>
            {question}
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
