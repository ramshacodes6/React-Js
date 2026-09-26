import React from 'react'
  
function Student ({name , age , course , Id}){
    return (
        <>
        <h3> Name : {name} </h3>
        <h3> Age : {age} </h3>
        <h3> Course : {course} </h3>
        <h3> Id : {Id} </h3>
        </>
    );
}

export default Student 