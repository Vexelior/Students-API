import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import './StudentsTable.css';

const StudentsTable = () => {

  const [students, setstudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = () => {
    fetch('http://127.0.0.1:8080/api/v1/student')
      .then(response => response.json())
      .then(data => {
        setstudents(data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  // Create an async function for pagination
  const pagination = () => {
    const table = document.getElementById('studentTable');
    const tableBody = table.querySelector('tbody');
    const tableRows = tableBody.querySelectorAll('tr');
    const tableRowsCount = tableRows.length;
    const rowsPerPage = 25;
    const pageCount = Math.ceil(tableRowsCount / rowsPerPage);
    let currentPage = 1;

    // Check that the elements are present in the HTML before selecting them
    const numbers = document.querySelector('.numbers');
    if (numbers) {
      const numbersList = numbers.querySelector('ul');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');

      // Create page numbers
      for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        li.appendChild(a);
        numbersList.appendChild(li);
      }

      // Display page numbers
      const displayPageNumbers = (page) => {
        const lis = numbersList.querySelectorAll('li');
        const activeLi = numbersList.querySelector('.active');
        activeLi.classList.remove('active');
        lis[page - 1].classList.add('active');
      }

      // Display rows
      const displayRows = (page) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        tableRows.forEach((row, index) => {
          if (index >= start && index < end) {
            row.style.display = 'table-row';
          } else {
            row.style.display = 'none';
          }
        });
      }

      // Add event listeners to the buttons
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayPageNumbers(currentPage);
          displayRows(currentPage);
        }
      });

      nextBtn.addEventListener('click', () => {
        if (currentPage < pageCount) {
          currentPage++;
          displayPageNumbers(currentPage);
          displayRows(currentPage);
        }
      });

      // Display the first page
      displayPageNumbers(currentPage);
      displayRows(currentPage);
    }
  }

  if (students != null) {
    students.forEach(student => {
      let date = new Date(student.dob);
      student.dob = date.toLocaleDateString();

      students.sort((a, b) => (a.id > b.id) ? 1 : -1);
    });
  }

  if (loading) {
    return <div className='container d-flex justify-content-center align-items-center' style={{ marginTop: '400px' }}>
      <span><i className="fa fa-spinner fa-spin"></i></span>
    </div>
  }

  if (students.length === 0) {
    return <div className='container d-flex justify-content-center align-items-center' style={{ marginTop: '400px' }}>
      <p>No students found!</p>
    </div>
  }

  return (
    <Layout>
      <div className="App">
        <div className="students-table">
          <h2 className='text-center mt-3 mb-3'>Students List</h2>
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
    </Layout>
  );
}

export default StudentsTable;
