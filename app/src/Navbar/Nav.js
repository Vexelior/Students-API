import React from 'react';
import './Nav.css';

const Nav = () => {

    // Create a function that searches for a student by name in the table
    const searchStudent = () => {
        // Get the input value
        let input = document.getElementById('search').value;
        // Get the table
        let table = document.getElementById('studentTable');
        if (!table)
        {
            return;
        }
        // Get the table rows
        let tr = table.getElementsByTagName('tr');
        // Loop through the table rows
        for (let i = 0; i < tr.length; i++)
        {
            // Get the table data
            let td = tr[i].getElementsByTagName('td')[1];

            // If the table data exists
            if (td)
            {
                // Get the text value of the table data
                let textValue = td.textContent || td.innerHTML;
                console.log(textValue);

                // If the text value matches the input value
                if (textValue.toLowerCase().indexOf(input.toLowerCase()) > -1)
                {
                    // Display the table row
                    tr[i].style.display = '';
                }
                else
                {
                    // Hide the table row
                    tr[i].style.display = 'none';
                }
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Student API</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active" style={{marginLeft: '10px'}}>
                        <a className="nav-link" href="/student/add">Add</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id='search' />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={searchStudent}>Search</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;