import React from 'react'
import propTypes from 'prop-types'
function StudentProps(props) {
    const {name,rollNo}=props
  return (
    <div>
      <h1>my name is  {name}</h1>
      <h1> my  roll numbber is {rollNo}</h1>
    </div>

  )
}
StudentProps.propTypes={
    name:propTypes.string,
    rollNo:propTypes.number
}
StudentProps.defaultProps={
    name:"name",
    rollNo:0
}
export default StudentProps