import React from 'react'

function Props(props) {
  const collageName="ABES BCC";
  return (
    <>
       <div>Props</div>
       <h1>Hello ABES</h1>
       <h2>{collageName}</h2>
       <h3>Hi {props.name}</h3>
    </>
   
  )
}

export default Props