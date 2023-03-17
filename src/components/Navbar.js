import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Mad Money 
                    </Link> 
                    <Link to='Team'><Button buttonStyle='btn--outline'>Meet The Team</Button></Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;