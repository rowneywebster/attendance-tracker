import React from 'react';

function Student({ student, onToggle, onRemove }) {
  const handleToggle = () => {
    onToggle(student.id);
  };

  const handleRemove = () => {
    onRemove(student.id);
  };

  return (
    <div className={`student ${student.present ? 'present' : 'absent'}`}>
      <span className="student-name">{student.name}</span>
      <div className="student-actions">
        <button 
          onClick={handleToggle}
          className={`status-button ${student.present ? 'present' : 'absent'}`}
        >
          {student.present ? 'Mark Absent' : 'Mark Present'}
        </button>
        <button 
          onClick={handleRemove}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Student;