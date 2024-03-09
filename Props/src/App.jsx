// props are read only properties that are shared between components.
// parent component can send data to a child component
// we can send child components distinct values   
import Students from "./Students"

// proptypes is a mechanism to ensure that passed value is of the correct datatype.
// age : PropTypes.number
function App() {
  return (
    <>
      <Students name= "Spongebob" age = {40} isstudent ={true} > </Students>
      <Students name ="Patrick" age = {42} isstudent = {false}></Students>
      <Students name ="squidward" age = {50} isstudent = {false}></Students>
      <Students name ="sandy" age = {27} isstudent = {true}></Students>
      <Students></Students>
    </>
  )
}

export default App
