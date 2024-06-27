import React from 'react';
import tickets from '../images/21246658331551682371-128.png';

const Navbar = () => {
    return (
        <div className="m-5"> 
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <img src={tickets} alt="Tickets" width="30" height="30" className="d-inline-block align-top" />
            <a className="navbar-brand m-2 font-weight-bold" href="#">Ticket Wave</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
}

export default Navbar;