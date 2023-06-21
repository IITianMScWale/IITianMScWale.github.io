import "../../App.css"
const colleges = require('../Api/api')

const Course =(props)=>{
    const logo_style ={
        width:"4rem"
    }
    
    

       const IIT = colleges.IIT[0];
       const fees = IIT.fees_structure;
       const obj = IIT.Subject[props.sub]
       const course = obj.course;
       const course_name = obj.course_name;
       const course_review  = obj.course_review;

    return(
<>
<div className="card mt-5 bg-secondary-subtle ">
    <div className='ms-5 d-flex flex-row   '>
          <div style={logo_style} >
              <img  className='img-thumbnail rounded-circle '  src={colleges.IIT[0].logo}/>
          </div>
          <div className=' fs-2 d-flex align-items-center fw-medium'> 
              M.Sc {" "+course_name+" at "+IIT.Name+", "+IIT.state}
          </div>
    </div>

</div>

<div  className="navbar d-flex flex-column">
<nav id="navbar-example2 w-100" className="navbar ">
  <ul className="d-flex flex-row nav nav-pills ">
    <li className="nav-item">
      <a className="ps-5 pe-5 text-decoration-none" href={course}>Course </a>
    </li>
    <li className="nav-item">
      <a className="pe-5 text-decoration-none" href="#scrollspyHeading2">Placement</a>
    </li>
    <li className="nav-item">
      <a className="pe-5 text-decoration-none" href={fees}>Fees</a>
    </li>
    <li className="nav-item  ">
      <a className="pe-5 text-decoration-none" href="#scrollspyHeading2">Scholarships</a>
    </li>
    <li className="nav-item  ">
      <a className="pe-5 text-decoration-none" href="#scrollspyHeading2">Closing rank</a>
    </li>
    <li className="nav-item  ">
      <a className="pe-5 text-decoration-none" href="#scrollspyHeading2">Student Review</a>
    </li>
    <li className="nav-item  ">
      <a className="pe-5 text-decoration-none" href="#scrollspyHeading2">Entrance Exam</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p></p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
</div>

</>
    )
}

export default Course