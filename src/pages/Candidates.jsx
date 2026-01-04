import { getCandidates } from "../api/mockApi";

export default function Candidates() {
  const candidates = getCandidates();

  return (
    <div className="card">
      <h2>Candidates</h2>
      {candidates.map(c => (
        <p key={c.id}>{c.name} — {c.email}</p>
      ))}
    </div>
  );
}
