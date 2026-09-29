import React from "react";
import { useState } from 'react'


function Changename () {
        let [name ,setName ] = useState("kamran")
        let [age , setAge ] = useState(22);

        return (
            <>
                <h2>Name - {name}</h2>
                <h3>Age - {age} </h3>

                <button onClick={ ()=> setName("Faris")}>Change Name </button>

                <button onClick={ ()=> setAge(age+1)}>Increase Age </button>
            </>
        );

    }

    export default Changename;