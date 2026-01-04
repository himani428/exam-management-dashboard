import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";

export default function ExamCard({ exam }) {
  const navigate = useNavigate();

  return (
    <Card>
      <div className="exam-title">{exam.title}</div>
      <div className="exam-meta">📅 {exam.date}</div>
      <div className="exam-meta">⏱ {exam.duration} mins</div>

      <button onClick={() => navigate(`/edit/${exam.id}`)}>
        Edit Exam
      </button>
    </Card>
  );
}
