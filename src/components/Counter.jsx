import React, { useState } from 'react'
function Counter() {
    const [value,setValue] = useState(0);

    const increments = () => setValue(value + 1);
    const decrements = () => setValue(value - 1);

  return (
    <>
    <div className="container">
    <h1 className="text-6xl">{value}</h1>
    </div>
    <section className="buttoncontainer">
        <button onClick={increments} className="incrementbtn">+</button>
        <button onClick={decrements} className="incrementbtn">-</button>
    </section>

    </>
  )
}

export default Counter