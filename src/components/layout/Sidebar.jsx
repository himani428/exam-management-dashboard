import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">Exam Dashboard</div>
      <nav className="nav">
        <NavLink to="/" end>Exams</NavLink>
        <NavLink to="/create">Create Exam</NavLink>
        <NavLink to="/candidates">Candidates</NavLink>
        <NavLink to="/results">Results</NavLink>
      </nav>
    </aside>
  );
}
