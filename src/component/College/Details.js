import Course from './Course'
const colleges = require('../Api/api')


const Details = (props) => {
    const str =   props.sub

    return (
     <>
      <Course sub={str}/>
   </>
  )
}




export default Details