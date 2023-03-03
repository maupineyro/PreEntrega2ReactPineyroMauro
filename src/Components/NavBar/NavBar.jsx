import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
              <Link to={'/'}  className="navbar-brand"> REACTIVE </Link>
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link to={'/'} className="nav-link" aria-current="page">Products</Link>
                      </li>

                    <NavDropdown title="Categories" id="navbarDropdown">
                          <NavDropdown.Item as='span'><Link to='/cat/jewelery' >Men</Link></NavDropdown.Item>   
                    <NavDropdown.Item as='span'><Link to='/cat/jewelery' >Women</Link></NavDropdown.Item>
                    <NavDropdown.Item as='span'><Link to='/cat/electronics' >Electronics</Link></NavDropdown.Item>
                    <NavDropdown.Item as='span'><Link to='/cat/jewelery' >jewels</Link></NavDropdown.Item>
                    </NavDropdown>
                    
                      <li className="nav-item">
                          <a className="nav-link" href="#"> Contact </a>
                      </li>
                      <CartWidget />
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default NavBar