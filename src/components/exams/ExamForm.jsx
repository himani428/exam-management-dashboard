export default function ExamForm({ values, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="card">
      <label>Title</label>
      <input
        value={values.title}
        onChange={e => onChange("title", e.target.value)}
        required
      />

      <label>Date</label>
      <input
        type="date"
        value={values.date}
        onChange={e => onChange("date", e.target.value)}
        required
      />

      <label>Duration (mins)</label>
      <input
        type="number"
        value={values.duration}
        onChange={e => onChange("duration", e.target.value)}
        required
      />

      <button type="submit">Save Exam</button>
    </form>
  );
}
