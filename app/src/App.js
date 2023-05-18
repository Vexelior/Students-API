import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [students, setstudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('http://127.0.0.1:8080/api/v1/student')
      .then(response => response.json())
      .then(data => {
        setstudents(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <div className='container d-flex justify-content-center align-items-center'>
              <p><span><i className="fa fa-spinner fa-spin"></i></span> Loading...</p>
            </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>Students</h2>
          {students.map(group =>
            <div key={group.id}>
              {group.name}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
