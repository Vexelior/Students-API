import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./StudentDelete.css";

const StudentDelete = () => {
    const [student, setStudent] = useState([]);
    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        deleteStudent();
    };

    const getStudentInfo = () => {
        let url = `http://localhost:8080/api/v1/student/${id}`;
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setStudent(data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getStudentInfo();
    }, []);


    const deleteStudent = () => {
        let url = `http://localhost:8080/api/v1/student/${id}`;
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    alert('Student deleted successfully!');
                    window.location.href = '/students/view';
                }
                else {
                    alert('Error deleting student!');
                }
            })
            .catch(error => console.log(error));
    };


    return (
        <div className="container d-flex justify-content-center">
            <div className='delete-container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <form>
                            <div className="form-group">
                                <h2>Are you sure you want to delete this student?</h2>
                            </div>
                            <div className="form-group">
                                <label>Student ID:</label>
                                <input type="text" className="form-control" value={student.id} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Student Name:</label>
                                <input type="text" className="form-control" value={student.name} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Student Email:</label>
                                <input type="text" className="form-control" value={student.email} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth:</label>
                                <input type="text" className="form-control" value={student.dob} readOnly />
                            </div>
                            <button type="submit" className="btn btn-danger" onClick={handleSubmit}>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDelete;