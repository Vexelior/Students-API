import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './StudentUpdate.css';

const StudentUpdate = () => {
    const [student, setStudent] = useState([]);
    const { id } = useParams()

    const getStudentDetails = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/student/${id}`);

        if (response.ok) {
            const data = await response.json();

            if (data) {
                // Format the dob to mm-dd-yyyy
                const dob = new Date(data.dob);
                const formattedDob = dob.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
                data.dob = formattedDob;

                setStudent(data);
            } else {
                alert('No data found!');
            }
        } else {
            alert('Failed to fetch student details!');
        }
    }

    useEffect(() => {
        getStudentDetails();
    }, []);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentToUpdate = {
            name: student.name,
            email: student.email,
            dob: student.dob
        }

        const response = await fetch(`http://localhost:8080/api/v1/student/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentToUpdate)
        });

        console.log(response);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            if (data) {
                setStudent(data);
                alert('Student updated successfully!');
                window.location.href = '/'; // Will redirect to details page later
            } else {
                alert('No data found!');
            }
        } else {
            alert('Failed to update student!');
        }
    }

    return (
        <div className="container">
            <div className="student-update">
                <h1>Update</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" value={student.name || ''} onChange={handleChange} name="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" value={student.email || ''} onChange={handleChange} name="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Date of Birth:</label>
                        <input type="date" className="form-control" value={student.dob || ''} onChange={handleChange} name="dob" />
                    </div>

                    <button className="btn btn-primary" onClick={handleSubmit}>Update</button>
                    <a href="/" className="btn btn-danger ml-2">Cancel</a> {/* Will redirect to details page later */}
                </form>
            </div>
        </div>
    );
}

export default StudentUpdate;