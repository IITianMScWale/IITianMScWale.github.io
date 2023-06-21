import React from 'react'
import './CollegeItem.css';
import iit_guwahati from "../Images/iit_guwahati_1.jpg"
import { Link } from 'react-router-dom';

const collegeItem = (props) => {
  return (
          <div className="card shadow border-0 rounded">
              <div className="card-body p-0">
                <div className="hero-image" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("' + iit_guwahati + '")'}}>
                  <div className="hero-text">
                    <h1>{props.name}</h1>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="mb-0">Available Courses (MSc)</h5>
                  <ul className="list-unstyled list-inline mb-0 mt-3">
                    {props.courses.map(item=>{ return <Link to={'./'+item} className="m-1 list-inline-item"><a className='btn btn-success'  >{item}</a></Link>})}
                  </ul>
                </div>
              </div>
          </div>
  );
}

export default collegeItem
