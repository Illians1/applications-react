import React from 'react';
import '../css/App.css';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <NavLink to="/" exact={true} className="btn btn-outline-dark bg-light">< FaListAlt /></NavLink>
                    <NavLink to="/completed" className="btn btn-outline-dark bg-light">< FaCheckSquare /></NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light">< FaPlusSquare /></NavLink>
                    <NavLink to="/delete" className="btn btn-outline-dark bg-light">< FaTrash /></NavLink>
                </div>
            </footer>
        </>
    );
}

export default NavBar;