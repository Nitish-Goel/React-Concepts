import React from 'react'

const ChildStudent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.village}</h1>

    </div>
  )
}

export default ChildStudent;
