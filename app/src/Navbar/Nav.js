import React from 'react';
import './Nav.css';

const Nav = () => {

    const searchStudent = () => {
        let input = document.getElementById('search').value;
        let table = document.getElementById('studentTable');
        if (!table)
        {
            return;
        }
        let tr = table.getElementsByTagName('tr');

        let matches = [];
        
        for (let i = 0; i < tr.length; i++)
        {
            let td = tr[i].getElementsByTagName('td')[1];

            if (td)
            {
                if (td.innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1 || td.innerText.toLowerCase().indexOf(input.toLowerCase()) > -1)
                {
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

            for (let i = 0; i < tr.length; i++)
            {
                tr[i].style.display = '';
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