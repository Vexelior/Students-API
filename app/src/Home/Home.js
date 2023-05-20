import React from 'react';
import './Home.css';
import StudentImage from '../assets/images/slideshow/students-image.jpg';

const Home = () => {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='display-4 text-center'>Student Management System</h1>
          </div>
          <div className='col-md-12'>
            <p className='lead text-center'>Welcome to the Student Management System</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <p className='text-center'>This is a simple application using my Students API that allows you to manage students.</p>
          </div>
        </div>
      </div>

      <div className='container'>
        <img src={StudentImage} alt='students' className='img-fluid' />
      </div>
    </div>
  );
}

export default Home;
