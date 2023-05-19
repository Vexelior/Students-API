import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  
  const [students, setstudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('http://127.0.0.1:8080/api/v1/student')
      .then(response => response.json())
      .then(data => {
        setstudents(data);
        setTimeout(() => {
          setLoading(false);
        } , 500);
      })
  }, []);

  // Format the date of birth to be more readable
  if (students != null) {
    students.forEach(student => {
      let date = new Date(student.dob);
      student.dob = date.toLocaleDateString();

      // Order the students by id
      students.sort((a, b) => (a.id > b.id) ? 1 : -1);
    });
  }

  if (loading) {
    return <div className='container d-flex justify-content-center align-items-center' style={{marginTop: '400px'}}>
              <span><i className="fa fa-spinner fa-spin"></i></span>
            </div>
  }

  if (students.length === 0) {
    return <div className='container d-flex justify-content-center align-items-center' style={{marginTop: '400px'}}>
              <p>No students found!</p>
            </div>
  }

  return (
    <div className="App">
      <div className="students-table">
        <h2 className='text-center'>Students</h2>
        <table className="table table-striped" id='studentTable'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.dob}</td>
                <td>
                  <a href={`/student/view/${student.id}`} className='btn btn-primary' id='crudButton'><i className="fa fa-eye"></i></a>
                  <a href={`/student/update/${student.id}`} className='btn btn-warning ml-2' id='crudButton'><i className="fa fa-edit"></i></a>
                  <a href={`/student/delete/${student.id}`} className='btn btn-danger ml-2' id='crudButton'><i className="fa fa-trash"></i></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
