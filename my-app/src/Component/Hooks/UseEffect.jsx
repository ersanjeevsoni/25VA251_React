import React, { useEffect, useState } from 'react'

function UseEffect({name}) {
const[timer,setTimer]=useState(0);

useEffect(()=>{
    setTimeout(()=>{
        setTimer((timer)=>timer+1)
    },1000)
});

/* useEffect(() => {
  //Runs on every render
});
useEffect(() => {
  //Runs only on the first render
}, []);
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]); */

// useEffect using state and Props but runs on every
  const [count, setCount] = useState(0);

  // useEffect runs when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);
/* useEffect depends on [count]
It runs every time count changes */


  return (
    <>
    <h2>UseEffect</h2>
    <p>
       The useEffect Hook allows you to perform side effects in your components.
       useEffect accepts two arguments. The second argument is optional.

        {/* useEffect(<function>, <dependency>) */}
    </p>
    <h3>Timer {timer}</h3>
    <h3>Couter {count} </h3>
    <button  onClick={() => setCount(count + 1)}>+</button>
    <button  onClick={() => setCount(count - 1)}>-</button>


    </>
  )
}

export default UseEffect