import React, { useState } from 'react'
import './Exp7.css';

function Exp7Count(props) {
 const msg="Hello JS";

 // useState for state in functional component for singel key and change on click event
 const[branch,setBranch]=useState("B.Tech");
 const changeBranch=()=>{
    setBranch("B.Tect(AIML)");
 }
 // useState to change color
 const[color,setColor]=useState('blue');

 const chnageColor=()=>{
    setColor(color==='blue'?'red':'blue')
 }

   // useState having multiple keys
 const[state,setState]=useState({
    name:"Abhay",
    age:21
 })
 //if we want to change multiple keys on any event then pass function
 const mouseOver=()=>{
    setState({
        ...state, // keep existing values
        name:"Vinay",  // update name
        age:23  //update age
    });
 }
// useState to change count
 const[count,setCount]=useState(0);
 const increment=()=>{
    setCount(count+1)
 };
 const decrement=()=>{
    setCount(count-1)
 };
 const reset=()=>{
    setCount(count*0)
 };

  return (
    <div class="container">
    {/* jsx */}
     <h1>{msg}</h1>
     
     {/* props */}
    <h2>Hello {props.HeadingText}</h2>

    {/* state change name and change color*/}
    <h2 onMouseOver={mouseOver} onMouseOut={chnageColor} style={{color:color}}>
    Hello, My name is {state.name} and age is {state.age}</h2>

    {/* only change branch on click event */}
    <h3>My course is {branch}</h3>
    <button onClick={changeBranch} className='buttons'>Change Branch</button>

    <div>
    <h2>Change Count {count}</h2>
    <button className='buttons' onClick={increment}>+VE</button>
        <button className='buttons' onClick={decrement}>-VE</button>
            <button className='buttons' onClick={reset}>Reset</button>
            </div>
    
    </div>
  )
}

export default Exp7Count