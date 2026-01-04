import { getResults } from "../api/mockApi";

export default function Results() {
  const results = getResults();

  return (
    <div className="card">
      <h2>Results</h2>
      {results.length === 0 && <p>No results available.</p>}
    </div>
  );
}
