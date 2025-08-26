
import { useState } from "react";


function StudentList() {
    
    const [students, setStudents] = useState([
    { id: 1, name: "Ayesha" },
    { id: 2, name: "Aima" },
    { id: 3, name: "Hina" },
  ]);

  const [newStudent, setNewStudent] = useState("");

  
  const addStudent = () => {
    if (newStudent.trim() === "") return;

    const newEntry = {
      id: Date.now(), // unique id for key
      name: newStudent,
    };
    setStudents([...students, newEntry]);
    setNewStudent("");
  };

  // Step 3: Remove student
  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-card">
      <h2> Student List</h2>

      {/* Input box to add student */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button onClick={addStudent}>Add</button>
      </div>

      {/* Step 4: Render students dynamically */}
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="remove-btn" onClick={() => removeStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
