import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import logo from '../assets/logo-outer-primary.svg'

const Navbar = () => {
  return (
    <>
      <div className="topper py-2">
        <div className="container d-flex justify-content-between">
          <div className="d-flex gap-2 gap-lg-4">
            <div className="d-flex align-items-center gap-lg-2">
              <Icon icon="mdi:location" color="white" className="icon"/>
              <span>Jl. Pangeran Ambarawa No. 16</span>
            </div>
            <div className="d-flex align-items-center gap-lg-2">
              <Icon icon="fluent:call-24-filled" color="white" className="icon"/>
              <span>012 3456 78910</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <a href="#link"><Icon icon="ri:facebook-fill" color="white" className="icon"/></a>
            <a href="#link"><Icon icon="mdi:instagram" color="white" className="icon"/></a>
            <a href="#link"><Icon icon="mdi:twitter" color="white" className="icon"/></a>
            <a href="#link"><Icon icon="mdi:youtube" color="white" className="icon"/></a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="javascript;:">
            <img src={logo} alt="logo" /><span>RS. HARAPAN BANGSA</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/vaksin" className="nav-link">Vaksin</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/research" className="nav-link">Research</NavLink>
              </li>
              <li className="nav-item d-none d-lg-block">
                <div className="dropdown h-100 d-flex align-items-center justify-content-center">
                  <button type="button" className="btnSearch" data-bs-toggle="dropdown" aria-expanded="false">
                    <Icon icon="ion:search" className="me-2" width="18" height="18"/>
                  </button>
                  <form className="dropdown-menu dropdown-menu-end p-0" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar