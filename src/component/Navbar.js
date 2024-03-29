import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
      <div className='mb-5'>
          
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark " >
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">eNews Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  
                    <li className="nav-item ">
                      <Link className="nav-link text-warning" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/technology">Technology</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-warning" to="/business">Business</Link>
                    </li>
                    
                    
                  </ul>
                  
                </div>
              </div>
        </nav>
      </div>
    )
  
}

export default Navbar
