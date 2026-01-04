import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/mockApi";

const ExamContext = createContext();

export function ExamProvider({ children }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadExams() {
    setLoading(true);
    const data = await api.getExams();
    setExams(data);
    setLoading(false);
  }

  async function addExam(exam) {
    await api.createExam(exam);
    loadExams();
  }

  async function editExam(id, exam) {
    await api.updateExam(id, exam);
    loadExams();
  }

  useEffect(() => {
    loadExams();
  }, []);

  return (
    <ExamContext.Provider value={{ exams, loading, addExam, editExam }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExams() {
  return useContext(ExamContext);
}
