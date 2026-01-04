import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import ExamList from "./pages/ExamList";
import ExamCreate from "./pages/ExamCreate";
import ExamEdit from "./pages/ExamEdit";
import Candidates from "./pages/Candidates";
import Results from "./pages/Results";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="main">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<ExamList />} />
              <Route path="/create" element={<ExamCreate />} />
              <Route path="/edit/:id" element={<ExamEdit />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
