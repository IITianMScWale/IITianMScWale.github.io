import React from 'react'
import CollegeItem from './CollegeItem';
import { Link } from 'react-router-dom';
const colleges = require('../Api/api')



const Colleges = () => {
  return (
    
    <div className="container py-5">
      <div className="row pb-5 mb-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <CollegeItem name='IIT Guwahati' courses={Object.keys(colleges.IIT[0].Subject)} />
        </div>
      </div>
    </div>

  )
}
export default Colleges
