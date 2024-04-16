export default function getStudentIdsSum(getListStudents) {
  const sum = getListStudents.reduce((total, getListStudents) => total + getListStudents.id, 0);
  return sum;
}
