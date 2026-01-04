import { useExams } from "../context/ExamContext";
import ExamCard from "../components/exams/ExamCard";
import Loader from "../components/ui/Loader";

export default function ExamList() {
  const { exams, loading } = useExams();
  if (loading) return <Loader />;

  return (
    <div className="grid">
      {exams.map(exam => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  );
}
