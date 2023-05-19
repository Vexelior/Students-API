import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./StudentView.css";

const StudentView = () => {
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
    } , []);

    return (
        <div className="container">
            <div className="student-view">
                <h1 className="mt-3">Student Details</h1>
                <div className="student-view-container">
                    <div className="student-view-row">
                        <label><b>Name</b></label>
                        <p>{student.name}</p>
                    </div>
                    <div className="student-view-row">
                        <label><b>Email</b></label>
                        <p>{student.email}</p>
                    </div>
                    <div className="student-view-row">
                        <label><b>Date of Birth</b></label>
                        <p>{student.dob}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentView;
