let exams = [
  { id: 1, title: "React Basics", date: "2026-02-10", duration: 60 },
  { id: 2, title: "JavaScript Advanced", date: "2026-02-15", duration: 90 }
];

let candidates = [
  { id: 1, name: "Himani Sonia", email: "himani@test.com" }
];

let results = [];

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export async function getExams() {
  await delay(500);
  return exams;
}

export async function createExam(exam) {
  await delay(500);
  exams.push({ ...exam, id: Date.now() });
}

export async function updateExam(id, updated) {
  await delay(500);
  exams = exams.map(e => e.id === id ? { ...e, ...updated } : e);
}

export function getCandidates() {
  return candidates;
}

export function getResults() {
  return results;
}
