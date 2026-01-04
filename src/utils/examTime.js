export function canAttemptExam(exam) {
  const examStart = new Date(exam.date).getTime();
  const examEnd = examStart + exam.duration * 60 * 1000;
  const now = Date.now();

  return now >= examStart && now <= examEnd;
}
