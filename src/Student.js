// props:

import ChildStudent from "./ChildStudent";
import propTypes from 'prop-types'

const Student = (props) => {
// const Student = ({name, age}) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      {/* <h1>{name}</h1> */}
      {/* <h1>{age}</h1> */}
      <ChildStudent name={props.name} age={props.age} village="Jhumian wali" />
    </div>
  )
}
Student.propTypes ={
    name: propTypes.string,
    age: propTypes.number
}
Student.defaultProps ={
    name: "Name",
    age : 0
}

export default Student;
