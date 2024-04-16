export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList.filter((student) => student.location === city);
  const updatedStudents = studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });

  return updatedStudents;
}
