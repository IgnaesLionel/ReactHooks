import React, { useState } from 'react'

const Hook = () => {

  const [counter, setCounter] = useState(0)

  const addOne = () =>
  {
    setCounter (prevCounter => prevCounter +1)
  }

  return (
    <div> {counter}
    <button className="btn btn-success mt-4" onClick={addOne} > test compteur </button>
    </div>
  )
}


export default Hook
