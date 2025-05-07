import { useState } from 'react';
import StudentList from './StudentList';

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newStudentName, setNewStudentName] = useState('');

  const resetAttendance = () => {
    setStudents(prevStudents => 
      prevStudents.map(student => ({ ...student, present: false }))
    );
  };

  const toggleAttendance = (studentId) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, present: !student.present } 
          : student
      )
    );
  };

  // Add new student function
  const addStudent = () => {
    if (!newStudentName.trim()) return;
    
    setStudents([
      ...students,
      { 
        id: Date.now(),
        name: newStudentName.trim(),
        present: false 
      }
    ]);
    setNewStudentName('');
  };

  // Remove student function
  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const presentCount = students.filter(student => student.present).length;

  return (
    <div className='container'>
      <h1>🏫 Attendance Tracker</h1>
      <p>Present: {presentCount}</p>

      {/* Add Student Section */}
      <div className="add-student">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addStudent()}
          placeholder="New student name"
        />
        <button className='rowney'
          onClick={addStudent}
          disabled={!newStudentName.trim()}
        >
          Add Student
        </button>
      </div>

      <button 
        onClick={resetAttendance}
        className="reset-button"
      >
        Reset Attendance
      </button>
      
      <StudentList 
        students={students} 
        onToggleAttendance={toggleAttendance}
        onRemoveStudent={removeStudent}
      />
    </div>
  );
}

export default App;