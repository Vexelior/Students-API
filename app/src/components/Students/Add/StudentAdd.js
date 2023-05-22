import React from 'react'
import Layout from '../../Layout/Layout';
import "./StudentAdd.css";

const StudentAdd = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let dob = document.getElementById('dob').value;

        // If the name, email, or dob is empty or null, alert the user
        if (!name || !email || !dob) {
            alert('Please fill out all fields!');
            return;
        }

        let studentToCreate = {
            id: 0,
            name: name,
            email: email,
            dob: dob,
        };

        fetch('http://127.0.0.1:8080/api/v1/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentToCreate),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network Error!');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                alert('Student added successfully!');
                window.location.href = '/';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Layout>
        <div className="container">
            <h2 className='text-center mt-4'>Add Student</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name='dob' className="form-control" id="dob" />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <a className='btn btn-secondary ml-2' href='/'>Cancel</a>
            </form>
        </div >
        </Layout>
    );
}

export default StudentAdd;