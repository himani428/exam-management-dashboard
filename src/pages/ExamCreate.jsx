import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExamForm from "../components/exams/ExamForm";
import { useExams } from "../context/ExamContext";

export default function ExamCreate() {
  const [form, setForm] = useState({ title: "", date: "", duration: "" });
  const { addExam } = useExams();
  const navigate = useNavigate();

  function onChange(key, value) {
    setForm({ ...form, [key]: value });
  }

  async function submit(e) {
    e.preventDefault();
    await addExam(form);
    navigate("/");
  }

  return <ExamForm values={form} onChange={onChange} onSubmit={submit} />;
}
