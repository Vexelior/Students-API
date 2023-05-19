import { React, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import "./StudentDelete.css";

const StudentDelete = () => {

    const { id } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        deleteStudent();
    };

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
                    window.location.href = '/';
                }
                else {
                    alert('Error deleting student!');
                }
            })
            .catch(error => console.log(error));
    };


    return (
        <div className="container">
        <form>
            <div className="form-group">
                <h2>Are you sure you want to delete this student?</h2>
            </div>
            <button type="submit" className="btn btn-danger" onClick={handleSubmit}>
                Delete
            </button>
        </form>
        </div>
    );
};

export default StudentDelete;