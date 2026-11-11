import React from 'react'

function Practice() {

  let a=10;
  let b= 20;
  let status = true;

  let user = [
    {id:1 ,Name:"abc" ,Age:24 },
    {id:2 ,Name:"mno" ,Age:28 },
    {id:3 ,Name:"xyz" ,Age:34 },
    {id:4 ,Name:"jkl" ,Age:40 },
  ]

  let data = user.map((obj,index)=>{
         return (
            <>
                {index + 1}
                {obj.Name}
            </>
        
       );
  });
  return (
    <>
        <h3> sum (a+b) = {a+b}</h3>

         {/* // terninary operator */}

        {status ? <p>welcome</p> : <p>Hii</p>} 
       
        <h2>{data}</h2>
       
        
    
    </>
  )
}

export default Practice;