import React from 'react';
import logo from '../assets/images/logo.png'
import './Nav.css';

const Nav = () => {

    const searchStudent = () => {
        let input = document.getElementById('search').value;
        let table = document.getElementById('studentTable');
        if (!table) {
            return;
        }
        let tr = table.getElementsByTagName('tr');

        let matches = [];

        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[1];

            if (td) {
                if (td.innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1 || td.innerText.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                    matches.push(tr[i]);
                }

                // Show only the matched rows
                if (matches.length > 0) {
                    let tbody = table.getElementsByTagName('tbody')[0];
                    if (!tbody) {
                        return;
                    }
                    for (let i = 0; i < tbody.rows.length; i++) {
                        tbody.rows[i].style.display = 'none';
                    }
                    for (let i = 0; i < matches.length; i++) {
                        matches[i].style.display = '';
                    }
                }
            }
        }

        if (matches.length === 0) {
            alert('No matches found!');

            resetStudentTable();
        }
    };

    const resetStudentTable = () => {
        let table = document.getElementById('studentTable');
        if (!table) {
            return;
        }
        let tr = table.getElementsByTagName('tr');

        for (let i = 0; i < tr.length; i++) {
            tr[i].style.display = '';
        }
    };

    // When the user clicks on the x in the search bar, reset the table
    const resetSearch = () => {
        let input = document.getElementById('search');
        if (!input) {
            return;
        }
        input.value = '';
        resetStudentTable();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} alt='logo' style={{ width: '60px', height: '60px', marginRight: '20px' }} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active" style={{ marginLeft: '10px' }}>
                        <a className="nav-link" href="/students/view">View Students</a>
                    </li>
                    <li className="nav-item active" style={{ marginLeft: '10px' }}>
                        <a className="nav-link" href="/student/add">Add Student</a>
                    </li>
                    <li className="nav-item active" style={{ marginLeft: '10px' }}>
                        <a className="nav-link" href="https://www.alexsandersontech.com" target='_blank'>Contact</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" id='search' />
                    <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={searchStudent}>Search</button>
                    <button className='btn btn-secondary my-2 my-sm-0 ml-2' type='button' onClick={resetSearch}>Reset</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
