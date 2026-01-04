import { useParams, useNavigate } from "react-router-dom";
import { useExams } from "../context/ExamContext";
import { useState, useEffect } from "react";
import ExamForm from "../components/exams/ExamForm";

export default function ExamEdit() {
  const { id } = useParams();
  const { exams, editExam } = useExams();
  const navigate = useNavigate();

  const exam = exams.find(e => e.id === Number(id));
  const [form, setForm] = useState(exam);

  useEffect(() => {
    setForm(exam);
  }, [exam]);

  if (!form) return null;

  function onChange(key, value) {
    setForm({ ...form, [key]: value });
  }

  async function submit(e) {
    e.preventDefault();
    await editExam(form.id, form);
    navigate("/");
  }

  return <ExamForm values={form} onChange={onChange} onSubmit={submit} />;
}
