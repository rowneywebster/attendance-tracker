import Student from './Student';

function StudentList({ students, onToggleAttendance, onRemoveStudent }) {
  return (
    <div className="student-list">
      {students.map(student => (
        <Student 
          key={student.id}
          student={student}
          onToggle={onToggleAttendance}
          onRemove={onRemoveStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;