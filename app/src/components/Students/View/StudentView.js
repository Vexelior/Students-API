import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import "./StudentView.css";

const StudentView = () => {
    const [student, setStudent] = useState([]);
    const { id } = useParams()
    const history = useNavigate();

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

    return (
        <>
            <Layout>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h2>Student Details</h2>
                            <hr />

                            <div className="col col-md-6 d-inline-block">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={student.name} readOnly />

                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={student.email} readOnly />

                                    <label htmlFor="dob">Date of Birth</label>
                                    <input type="text" className="form-control" id="dob" name="dob" value={student.dob} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-container text-center">
                    <div className="row">
                        <div className="col">
                            <a className="btn btn-primary" onClick={() => history('/students/view')}>Back</a>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default StudentView;
