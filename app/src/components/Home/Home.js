import React from 'react';
import './Home.css';
import StudentImage from '../../assets/images/students-image.jpg';
import Layout from '../Layout/Layout';

const Home = () => {
  return (
    <>
    <Layout>
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4 text-center mt-5'>Student Management System</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <p className='text-center mt-2'>This is a simple application using my Students API that allows you to manage students.</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <img src={StudentImage} alt='students' className='img-fluid' />
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Home;
