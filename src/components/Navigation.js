import React from 'react';

export default function Navigation({currentPage, setCurrentPage}){
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                href="#about"
                onClick={() => setCurrentPage("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
              <a
                onClick={() => setCurrentPage("Portfolio")}
                className="nav-link"
                href="#portfolio"
              >
                Portfolio
              </a>
              <a
                onClick={() => setCurrentPage("Resume")}
                className="nav-link"
                href="#resume"
              >
                Resume
              </a>
              <a
                onClick={() => setCurrentPage("Contact")}
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
    
    
}