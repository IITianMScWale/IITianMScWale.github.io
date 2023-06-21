import React from 'react'
import '../App.css';
import logo from "./Images/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleFeaturesClick = () => {
    if (window.location.pathname === '/')
      document.getElementById('features').scrollIntoView();
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand ml-5" to="/">          <img className=" logo rounded-circle" src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse respo_nav navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className="nav-link fw-bolder ml-5  text-white active fs-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/#features' className="nav-link fw-bolder ml-5 text-white fs-3" onClick={handleFeaturesClick}>Our Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder ml-5 text-white fs-3" to='/payment'>Join Mentorship</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder ml-5 text-white active fs-3" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav >
      {/* 
      <ul className=" p-3 nav_color nav justify-content-around align-items-center">
        <li className="nav-item">
          <img className=" logo rounded-circle" src={logo} alt="" />
        </li>
        <li className="nav-item">
          <a >
            <Link className="nav-link fw-bolder active" to="/">Home</Link>
          </a>
        </li>
        <li className="nav-item">

          <a>
            <Link >Colleges</Link>
            <ul className="list-group dropdown1">
              <li className="list-group-item" ><Link >IIT</Link></li>
              <li className="list-group-item"><Link >NIT</Link></li>
            </ul>
          </a>

        </li>

        <li className="nav-item">
          <a>
            <Link className="nav-link drp1 fw-bolder" to="/exams">Exams</Link>
            <ul className="list-group dropdown2">
              <li className="list-group-item"><Link>GATE</Link></li>
              <li className="list-group-item"><Link>CSIR-NET</Link></li>
              <li className="list-group-item"><Link>IIT-JAM</Link></li>
              <li className="list-group-item"><Link>TIFR</Link></li>
              <li className="list-group-item"><Link>NIMCET</Link></li>
            </ul>
          </a>
        </li>

        <li className="nav-item">
          <a><Link className="nav-link fw-bolder active" to="/about">About</Link></a>
        </li>

      </ul> */}
      <div div class="marquee-w" >
        <div class="marquee">
          <span className=' fs-5 pt-2 fw-bolder'>Now boost your IIT preparation with IITians -  IIT-JAM , GATE , TIFR , NIMCET <Link className="text-decoration-none text-warning" to="/#features" onClick={handleFeaturesClick}>Click to know all Features and Benifits</Link></span>
        </div>
      </div >
    </>
  )
}

export default Navbar
