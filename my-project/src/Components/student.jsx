import react from 'react'
  
function Student (props){
    return (
        <>
        <h3> Name : {props.name} </h3>
        <h3> Age : {props.age} </h3>
        <h3> Course : {props.course} </h3>
        <h3> Id : {props.Id} </h3>
        </>
    );
}

export default Student 